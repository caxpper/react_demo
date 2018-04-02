import types from './types';

export function tick(){

    const now = new Date().toLocaleTimeString('en-US');

     return {
         type: types.TICK,
         payload:now
     }
}