import {
  GET_ERROR,
  GET_INFO,
  GET_SUCCESS,
  GET_MSG,
  CONFIRM_MESSAGE,
  ENQUEUE_SNACKBAR,
  CLOSE_SNACKBAR,
  REMOVE_SNACKBAR
} from "../actions/SnackBarAction";

const initialState = {
  msgs : [],
};

const SnackBarReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_ERROR: {
      // return {
      //   ...state,
      //   open : true,
      //   msg : action.data,
      //   severity : "error"
      // };

      return {
        ...state,
        msgs: [
          ...state.msgs,
          {
            key: new Date().getTime() + Math.random(),
            message : action.data,
            options : {
              variant : "error"
            },
            dismissed : false
          }
        ]
      }
    }
    case GET_INFO:{
      // return {
      //   ...state,
      //   open : true,
      //   msg : action.data,
      //   severity : "info"
      // };
      return {
        ...state,
        msgs: [
          ...state.msgs,
          {
            key: new Date().getTime() + Math.random(),
            message : action.data,
            options : {
              variant : "info"
            },
            dismissed : false
          }
        ]
      }
    }
    case GET_SUCCESS:{
      // return {
      //   ...state,
      //   open : true,
      //   msg : action.data,
      //   severity : "success"
      // };

      return {
        ...state,
        msgs: [
          ...state.msgs,
          {
            key: new Date().getTime() + Math.random(),
            message : action.data,
            options : {
              variant : "success"
            },
            dismissed : false
          }
        ]
      }
    }

    case GET_INFO:{
      // return {
      //   ...state,
      //   open : true,
      //   msg : action.data,
      //   severity : action.severity
      // };

      return {
        ...state,
        msgs: [
          ...state.msgs,
          {
            key: new Date().getTime() + Math.random(),
            message : action.data,
            options : {
              variant : "info"
            },
            dismissed : false
          }
        ]
      }
    }
    
    case CONFIRM_MESSAGE: {
      return {
        ...state,
        open : false,
        msg : "",
      };
    }
    
    case ENQUEUE_SNACKBAR: {
      return {
        ...state,
        msgs: [
          ...state.msgs,
          {
            key: action.key,
            ...action.msg,
          }
        ]
      }
    }

    case CLOSE_SNACKBAR: {
      return {
        ...state,
        msgs: state.msgs.map((msg) => {
          return (action.dismissAll || msg.key == action.key) ? {...msg, dismissed : true} : {...msg};
        }),
      }
    }

    case REMOVE_SNACKBAR: {
      return {
        ...state,
        msgs: state.msgs.filter(
          msg => msg.key !== action.key,
        )
      }
    }


    default: {
      return state;
    }
  }
};

export default SnackBarReducer;
