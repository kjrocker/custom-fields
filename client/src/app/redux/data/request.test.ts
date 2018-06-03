import { Store } from 'react-redux';
import sinon, { SinonSpy } from 'sinon';
import { testStore } from '../../../lib';
import reducers from './index';
import { getRequestState } from './request.selector';
import { mapApi } from './util';

let store: Store<any>;
let mockActions;

const doNothing = () => undefined;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const mockApi = {
  getStuff: async (...args) => {
    await sleep(1);
    return Promise.resolve({ data: args });
  },
  getFail: async (...args) => {
    await sleep(1);
    return Promise.reject(args);
  }
};

const spyApi: Record<string, SinonSpy> = Object.keys(mockApi).reduce(
  (acc, val) => Object.assign(acc, { [val]: sinon.spy(mockApi[val]) }),
  {}
);

describe('default behavior', () => {
  beforeEach(() => {
    store = testStore(reducers);
  });

  it('ignores other action types, even with an endpoint', () => {
    const oldState = getRequestState(store.getState());
    store.dispatch({ type: 'Example Type', payload: { endpoint: 'test' } });
    expect(getRequestState(store.getState())).toEqual(oldState);
  });
});

describe('basic success', () => {
  beforeAll(() => {
    mockActions = mapApi(spyApi, { cache: false });
  });

  beforeEach(() => {
    store = testStore(reducers);
  });

  it('sets loading correctly on success', async (done) => {
    const response = store.dispatch(mockActions.getStuff('wat'));
    expect(store.getState().request.getStuff.loading).toBeTruthy();
    await response;
    expect(store.getState().request.getStuff.loading).toBeFalsy();
    done();
  });

  it('sets succeeded correctly on success', async (done) => {
    const response = store.dispatch(mockActions.getStuff('wat'));
    expect(store.getState().request.getStuff.succeeded).toBeFalsy();
    await response;
    expect(store.getState().request.getStuff.succeeded).toBeTruthy();
    done();
  });

  it('does not cache duplicate requests', async (done) => {
    const startingCount = spyApi.getStuff.callCount;
    await store.dispatch(mockActions.getStuff('TEST_01_01'));
    await store.dispatch(mockActions.getStuff('TEST_01_01'));
    expect(spyApi.getStuff.callCount).toBe(startingCount + 2);
    done();
  });
});

describe('caching of failed requests', () => {
  beforeAll(() => {
    mockActions = mapApi(spyApi, { cache: true });
  });

  beforeEach(() => {
    store = testStore(reducers);
  });

  it('allows duplicate requests', async (done) => {
    const startingCount = spyApi.getFail.callCount;
    try {
      await store.dispatch(mockActions.getFail('TEST_02_01'));
    } catch (e) {
      doNothing();
    }
    try {
      await store.dispatch(mockActions.getFail('TEST_02_01'));
    } catch (e) {
      doNothing();
    }
    expect(spyApi.getFail.callCount).toBe(startingCount + 2);
    done();
  });

  it('also allows different requests', async (done) => {
    const startingCount = spyApi.getFail.callCount;
    try {
      await store.dispatch(mockActions.getFail('TEST_05_01'));
    } catch (e) {
      doNothing();
    }
    try {
      await store.dispatch(mockActions.getFail('TEST_05_02'));
    } catch (e) {
      doNothing();
    }
    expect(spyApi.getFail.callCount).toBe(startingCount + 2);
    done();
  });
});

describe('basic GET cache', () => {
  beforeAll(() => {
    mockActions = mapApi(spyApi, { cache: true });
  });

  beforeEach(() => {
    store = testStore(reducers);
  });

  it('prevents duplicate requests', async (done) => {
    const startingCount = spyApi.getStuff.callCount;
    await store.dispatch(mockActions.getStuff('TEST_03_01'));
    await store.dispatch(mockActions.getStuff('TEST_03_01'));
    expect(spyApi.getStuff.callCount).toBe(startingCount + 1);
    done();
  });

  it('does not prevent different requests', async (done) => {
    const startingCount = spyApi.getStuff.callCount;
    await store.dispatch(mockActions.getStuff('TEST_04_01'));
    await store.dispatch(mockActions.getStuff('TEST_04_02'));
    expect(spyApi.getStuff.callCount).toBe(startingCount + 2);
    done();
  });
});
