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
  return (WrappedComponent: React.ComponentType<P & R>) => {
    const Component: React.SFC<P & Partial<R>> = (props) => <WrappedComponent {...mapProps(props)} {...props} />;
    Component.displayName = `withProps(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return Component;
  };
};

export default withProps;
