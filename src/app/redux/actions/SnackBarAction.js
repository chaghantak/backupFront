import axios from "axios";

export const GET_ERROR = "GET_ERROR";
export const GET_INFO = "GET_INFO";
export const GET_MSG = "GET_MSG";
export const GET_SUCCESS = "GET_SUCCESS";
export const CONFIRM_MESSAGE = "CONFIRM_MESSAGE";

export const ENQUEUE_SNACKBAR = "ENQUEUE_SNACKBAR";
export const CLOSE_SNACKBAR = "CLOSE_SNACKBAR";
export const REMOVE_SNACKBAR = "REMOVE_SNACKBAR";

export function enqueueSnackbar(msg){
  const key = msg.options && msg.options.key;

  return dispatch => {
    return dispatch({
      type : ENQUEUE_SNACKBAR,
      msg : {
        ...msg,
        key : key || new Date().getTime() + Math.random(),
      }
    })
  }
}

export function closeSnackbar(key){
  return dispatch => {
    return dispatch({
      type : CLOSE_SNACKBAR,
      dismissAll : !key,
      key,
    })
  }
}

export function removeSnackbar(key){
  return dispatch => {
    return dispatch({
      type : REMOVE_SNACKBAR,
      key,
    })
  }
}

export function confirmMessage(){
  return dispatch => {
    return dispatch({type : CONFIRM_MESSAGE})
  }
}

export function showInfo(msg){
  return enqueueSnackbar({
    message : msg,
    options : {
      variant : "info",
    }
  });

  // return dispatch => {
  //   return dispatch({
  //     type : GET_INFO,
  //     data : msg
  //   })
  // }
}

export function showMsg(msg, severity){
  return enqueueSnackbar({
    message : msg,
    options : {
      variant : severity,
    }
  });

  // return dispatch => {
  //   return dispatch({
  //     type : GET_MSG,
  //     data : msg,
  //     severity : severity
  //   })
  // }
}