import { RootState } from '../store/createStore';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type DispatchType = ThunkDispatch<RootState, unknown, AnyAction>;
