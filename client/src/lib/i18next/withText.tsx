import { TranslationOptionsBase } from 'i18next';
import * as React from 'react';
import { I18n } from 'react-i18next';
import { i18nProps, Options } from 'react-i18next/src/I18n';

const defaultOptions = {};

export type TranslateFn = (
  key: string | string[],
  options?: TranslationOptionsBase &
    object & {
      [key: string]: any;
    }
) => any;

export type MapTextFn = (t: TranslateFn, props: object) => object;

const withText = (fn: MapTextFn, args?: Partial<i18nProps>) => {
  const extraProps = Object.assign({}, defaultOptions, args);
  return <P extends Partial<Options>>(BaseComponent: React.ComponentType<P>) => {
    return (props) => {
      return (
        <I18n {...extraProps}>
          {(t, other) => {
            const tProps = fn(t, props);
            return <BaseComponent {...other} {...tProps} {...props} />;
          }}
        </I18n>
      );
    };
  };
};

export default withText;
