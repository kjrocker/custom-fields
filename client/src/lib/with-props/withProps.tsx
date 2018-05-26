import * as React from 'react';
import shallowEqual from './shallowEqual';

const memoize = (fn) => {
  if (fn.length === 0) {
    let returnValue = fn();
    return () => returnValue;
  } else {
    let prevArg;
    let returnValue;
    return (arg) => {
      if (shallowEqual(arg, prevArg)) {
        return returnValue;
      } else {
        returnValue = fn(arg);
        prevArg = arg;
        return returnValue;
      }
    };
  }
};

const withProps = <P, R>(mapPropsBase: (p?: P) => R) => {
  const mapProps = memoize(mapPropsBase) as (p?: P) => R;
  return (BaseComponent: React.ComponentType<P & R>) => {
    return (props: P) => <BaseComponent {...mapProps(props)} {...props} />;
  };
};

export default withProps;
