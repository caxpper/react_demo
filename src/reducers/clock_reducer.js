import types from '../actions/types';

const DEFAULT_STATE = {
    currentTime: new Date().toLocaleTimeString('en-US')
};

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.TICK:
            return {...state, currentTime: action.payload};
        default:
            return state;
    }
}