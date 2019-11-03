import {createModel} from "@rematch/core";

export const count = createModel({
    state: 0, // initial state
    reducers: {
        // handle state changes with pure functions
        increment(state, payload) {
            return state + payload
        },
    },
    effects: dispatch => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        // @ts-ignore
        async incrementAsync(payload, rootState) {
            // @ts-ignore
            await new Promise(resolve => setTimeout(resolve, 1000))
            dispatch.count.increment(payload);

        },
    }),
});