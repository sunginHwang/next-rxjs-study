import {createReducer, createAction} from 'typesafe-actions';
import {pipe} from 'rxjs';
import {filter, mapTo, tap} from 'rxjs/operators';
import {ofType} from 'redux-observable';

import {produce} from 'immer';

const prefix: string = 'PING_';

const PING: string = `${prefix}PING`;
const PONG: string = `${prefix}PONG`;


export const changePing = createAction(PING)<string>();


export const pingEpic = action$ => action$.pipe(
    ofType(PING),
    tap((e) => {
        console.log(e);
    }),
    mapTo({type: PONG})
)

export interface pingInitType {
    ping: string;
}

const initialState: pingInitType = {
    ping: 'pingInit',
};

export default createReducer(initialState, {
    [PONG]: (state, action) =>
        produce<pingInitType>(state, draft => {
            console.log('pong');
            draft.ping = '오퍼레이터 작동 완료';
        }),
});


