import serialize from './index';

describe('with single, object, arguments', () => {
  it('returns matching strings with identical objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(serialize(obj1) === serialize(obj2)).toBeTruthy();
  });

  it('returns matching strings with reordered objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 2, a: 1 };
    expect(serialize(obj1) === serialize(obj2)).toBeTruthy();
  });

  it('returns matching string with nested objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { b: { c: 2 }, a: 1 };
    expect(serialize(obj1) === serialize(obj2)).toBeTruthy();
  });

  it('returns matching string with nested objects', () => {
    const obj1 = { a: 1, b: { c: ['what, why'] } };
    const obj2 = { b: { c: ['what', 'why'] }, a: 1 };
    expect(serialize(obj1) === serialize(obj2)).toBeTruthy();
  });
});

describe('with a single argument', () => {
  it('returns true in all the trivial cases', () => {
    [1, 'wat', true, false, 1.55, {}, [], 0].forEach((val) => expect(serialize(val) === serialize(val)).toBeTruthy());
  });

  it('returns true for null and undefined', () => {
    [null, undefined].forEach((val) => expect(serialize(val) === serialize(val)).toBeTruthy());
  });
});

describe('with lots of arguments', () => {
  it('cares about all provided arguments', () => {
    expect(serialize('wat', 'but why') === serialize('wat', 'but why')).toBeTruthy();
    expect(serialize('wat', 'but why') === serialize('wat', 'but why not')).toBeFalsy();
    expect(serialize('wat', 'but why') === serialize('wat no', 'but why')).toBeFalsy();
  });

  it('argument order matters, obviously', () => {
    expect(serialize('wat', 'but why') === serialize('but why', 'wat')).toBeFalsy();
  });

  it('handles object arguments correctly', () => {
    const obj = { a: 2, b: 2 };
    expect(serialize(1, 'why', obj) === serialize(1, 'why', obj)).toBeTruthy();
  });

  it('handles array arguments correctly', () => {
    const list = ['first', 'second'];
    expect(serialize(1, 'why', list) === serialize(1, 'why', list)).toBeTruthy();
    expect(serialize(1, 'why', list) === serialize(1, 'why', ['third, fourth'])).toBeFalsy();
    expect(serialize(1, 'why', list) === serialize(2, 'why', list)).toBeFalsy();
  });

  it('handles arrays with objects', () => {
    const list = ['first', { second: 2 }];
    expect(serialize(1, list) === serialize(1, list)).toBeTruthy();
    expect(serialize(1, list) === serialize(1, ['first', { second: 3 }])).toBeFalsy();
    expect(serialize(1, list) === serialize(1, ['second', { second: 2 }])).toBeFalsy();
    expect(serialize(1, list) === serialize(1, ['first', { third: 3 }])).toBeFalsy();
    expect(serialize(1, list) === serialize(2, list)).toBeFalsy();
  });

  it('handles object key reordering in arrays', () => {
    const list1 = ['hi', { first: 1, second: 2 }];
    const list2 = ['hi', { second: 2, first: 1 }];
    expect(serialize(1, list1) === serialize(1, list2)).toBeTruthy();
  });

  it('handles deeply nested key reordering in arrays', () => {
    const list1 = ['hi', { first: 1, second: { third: 3, fourth: 4 } }];
    const list2 = ['hi', { second: { fourth: 4, third: 3 }, first: 1 }];
    expect(serialize(1, list1) === serialize(1, list2)).toBeTruthy();
  });
});
