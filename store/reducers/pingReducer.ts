import { createReducer, createAction } from 'typesafe-actions';
import {produce} from 'immer';

const prefix: string = 'PING_';

const PING: string = `${prefix}PING`;


export const changePing = createAction(PING)<string>();

export interface pingInitType {
    ping: string;
}

const initialState: pingInitType = {
    ping: 'pingInit',
};

export default createReducer(initialState, {
    [PING]: (state, action) =>
        produce<pingInitType>(state, draft => {
            draft.ping = action.payload;
        }),
});


