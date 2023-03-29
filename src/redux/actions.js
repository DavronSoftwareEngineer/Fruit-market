import { dispatch } from "./store";
import { ADD_NEW_TASK } from "./type";

export const addNewTask = (value) => {
    dispatch({type: ADD_NEW_TASK, payload: value});
  }
  