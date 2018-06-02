import { mount } from 'enzyme';
import i18n from 'i18next';
import * as React from 'react';
import { translate } from 'react-i18next';
import withText, { MapTextFn } from './withText';

const i18nInstance = i18n
  .createInstance({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react!!
    },
    ns: ['common'],
    defaultNS: 'common'
  })
  .init();

i18nInstance.addResourceBundle('en', 'common', { example1: 'Example Key', example2: 'Why' });

const DumbSpan = (props) => <span>{props.content}</span>;

const mapText: MapTextFn = (t, ownProps) => {
  return { content: t('example1') };
};

describe('withText', () => {
  it('still passes `t` and `i18next` props', () => {
    const Component = withText(mapText, { i18n: i18nInstance })(DumbSpan);
    const Wrapper = mount(<Component />);
    expect(Wrapper.find(DumbSpan).prop('i18n')).toEqual(i18nInstance);
    expect(Wrapper.find(DumbSpan).prop('t')).toBeInstanceOf(Function);
    Wrapper.unmount();
  });
});

describe('withText', () => {
  it('passes props from mapText', (done) => {
    const Component = withText(mapText, { i18n: i18nInstance })(DumbSpan);
    const Wrapper = mount(<Component />);
    setTimeout(() => {
      expect(Wrapper.find(DumbSpan).prop('content')).toEqual('Example Key');
      Wrapper.unmount();
      done();
    }, 1000);
  });
});
