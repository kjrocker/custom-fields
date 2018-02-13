import { push } from 'react-router-redux';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

type ActionCreator = (...x: any[]) => ThunkAction<any, any, any> | Action;

const addRedirect = <Fn extends ActionCreator>(action: Fn, redirect: string) => {
  const newFn: ActionCreator = (...args) => {
    return (dispatch: Function) => {
      dispatch(action(...args));
      dispatch(push(redirect));
    };
  };
  return newFn as Fn;
};

export default addRedirect;
