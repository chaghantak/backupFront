import {
  GET_NETWORKS,
  GET_NETWORK,
  UPDATE_NETWORK,
  ADD_NETWORK,
  DELETE_NETWORK,
} from "../actions/NetworkAction";

const initialState = {
  network: {},
  networks : [],
};

const networkReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_NETWORKS: {
      return {
        ...state,
        networks : action.data
      }
    }
    case GET_NETWORK: {
      return {
        ...state,
        network : action.data
      }
    }
    case ADD_NETWORK: {
      let {network, networks, ...etc} = state;
      return {
        ...state,
        network : action.data,
        networks : [...networks, action.data]
      }
    }
    case UPDATE_NETWORK: {
      let {network, networks, ...etc} = state;
      return {
        ...etc,
        network : action.data,
        networks : networks.map((el) => { if(el.id == action.data.id){ return action.data } else{ return el} })
      }
    }

    case DELETE_NETWORK: {
      let {networks, ...etc} = state;
      return {
        ...etc,
        networks : networks.filter((el) => { return el.id != action.data; })
      }
    }

    default: {
      return state;
    }
  }
};

export default networkReducer;
