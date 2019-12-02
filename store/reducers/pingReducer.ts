import { createReducer, createAction } from 'typesafe-actions';
import {produce} from 'immer';

const prefix: string = 'CATEGORY_';

const PING: string = `${prefix}PING`;


export const ping = createAction(PING)<string>();

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


