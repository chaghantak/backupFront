import axios from "axios";
import { chainEncoder, chainDecoder, graphDecoder, graphEncoder } from "../../common"
import { GET_ERROR, GET_SUCCESS } from "./SnackBarAction"

export const ADD_CHAIN = "ADD_CHAIN";
export const UPDATE_CHAIN = "UPDATE_CHAIN";
export const DELETE_CHAIN = "DELETE_CHAIN";
export const GET_CHAINS = "GET_CHAINS";
export const GET_CHAIN = "GET_CHAIN";
export const COMBINE_CHAINS = "COMBINE_CHAINS";


export function addChain(data) {
  return dispatch => {
    return axios

      .post(`http://localhost:27017/api/chains/`, chainEncoder(data))

      .then((res) => {
        console.log(res.data);
        dispatch({ type: ADD_CHAIN, data: chainDecoder(res.data, true) });
        dispatch({ type: GET_SUCCESS, data: "Success to add chain" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function updateChain(data){
  return dispatch => {
    return axios
      .put(`http://localhost:27017/api/chains/` + data.id + "/", chainEncoder(data))
      .then((res) => {
        console.log(res.data);
        dispatch({ type: UPDATE_CHAIN, data: chainDecoder(res.data, true) });
        dispatch({ type: GET_SUCCESS, data: "Success to update chain" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function deleteChain(id){
  return dispatch => {
    return axios

      .delete(`http://localhost:27017/api/chains/` + id + "/")

      .then((res) => {
        dispatch({ type: DELETE_CHAIN, data : id });
        dispatch({ type: GET_SUCCESS, data: "Success to delete chain" });
      })
      .catch((err) => {
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function getChains(){
  return dispatch => {
    return axios

      .get(`http://localhost:27017/api/chains/`)

      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_CHAINS, data: res.data.map((el) => { return chainDecoder(el, false); }) });
        dispatch({ type: GET_SUCCESS, data: "Success to get chain list" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function getChain(id, render){
  return dispatch => {
    return axios
      .get(`http://localhost:27017/api/chains/` + id)

      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_CHAIN, data: chainDecoder(res.data, render) });
        dispatch({ type: GET_SUCCESS, data: "Success to get chain" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function combineChainsDefault(chains){
  return dispatch => {
    return axios

      .post(`http://localhost:27017/api/chains/combine_chains_default/`, chains.map((el) => { return graphEncoder(el, false); }))

      .then((res) => {
        console.log(res.data)
        dispatch({ type: COMBINE_CHAINS, data : graphDecoder(res.data, false)})
        dispatch({ type: GET_SUCCESS, data: "Success to generate graph" });
      })
      .catch((err) => {
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function combineChainsBayesian(chains){
  return dispatch => {
    return axios

      .post(`http://localhost:27017/api/chains/combine_chains_bayesian/`, chains.map((el) => { return graphEncoder(el, false); }))

      .then((res) => {
        console.log(res.data)
        dispatch({ type: COMBINE_CHAINS, data : graphDecoder(res.data, false)})
        dispatch({ type: GET_SUCCESS, data: "Success to generate graph" });
      })
      .catch((err) => {
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}