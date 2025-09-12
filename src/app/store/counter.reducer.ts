import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.action";

export const initialstate=0;
export const counterReducer= createReducer(
    initialstate,
   on(increment,(state)=>state+1) ,
    on(decrement,(state)=>state-1)
)