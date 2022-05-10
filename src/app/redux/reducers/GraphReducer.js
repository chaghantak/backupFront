import {
  GET_GRAPHS,
  GET_GRAPH,
  UPDATE_GRAPH,
  ADD_GRAPH,
  DELETE_GRAPH,
  SPLIT_GRAPH,
} from "../actions/GraphAction";

const initialState = {
  graph: {},
  graphs : [],
  splited_chains : []
};

const graphReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_GRAPHS: {
      return {
        ...state,
        graphs : action.data
      }
    }
    case GET_GRAPH: {
      return {
        ...state,
        graph : action.data
      }
    }
    case ADD_GRAPH: {
      let {graph, graphs, ...etc} = state;
      return {
        ...state,
        graph : action.data,
        graphs : [...graphs, action.data]
      }
    }
    case UPDATE_GRAPH: {
      let {graph, graphs, ...etc} = state;
      return {
        ...etc,
        graph : action.data,
        graphs : graphs.map((el) => { if(el.id == action.data.id){ return action.data } else{ return el} })
      }
    }

    case DELETE_GRAPH: {
      let {graphs, ...etc} = state;
      return {
        ...etc,
        graphs : graphs.filter((el) => { return el.id != action.data; })
      }
    }

    case SPLIT_GRAPH: {
      return {
        ...state,
        splited_chains : action.data
      }
    }

    default: {
      return state;
    }
  }
};

export default graphReducer;
