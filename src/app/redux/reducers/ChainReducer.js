import {
  GET_CHAINS,
  GET_CHAIN,
  UPDATE_CHAIN,
  ADD_CHAIN,
  DELETE_CHAIN,
  COMBINE_CHAINS
} from "../actions/ChainAction";

const initialState = {
  chain: {},
  chains : [],
  combined : {}
};

const chainReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_CHAINS: {
      return {
        ...state,
        chains : action.data
      }
    }
    case GET_CHAIN: {
      return {
        ...state,
        chain : action.data
      }
    }
    case ADD_CHAIN: {
      let {chain, chains, ...etc} = state;
      return {
        ...state,
        chain : action.data,
        chains : [...chains, action.data]
      }
    }
    case UPDATE_CHAIN: {
      let {chain, chains, ...etc} = state;
      return {
        ...etc,
        chain : action.data,
        chains : chains.map((el) => { if(el.id == action.data.id){ return action.data } else{ return el} })
      }
    }

    case DELETE_CHAIN: {
      let {chains, ...etc} = state;
      return {
        ...etc,
        chains : chains.filter((el) => { return el.id != action.data; })
      }
    }

    case COMBINE_CHAINS: {
      return {
        ...state,
        combined : action.data
      }
    }

    default: {
      return state;
    }
  }
};

export default chainReducer;
