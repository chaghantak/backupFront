import axios from "axios";
import { graphEncoder, graphDecoder } from "../../common"
import { GET_ERROR, GET_SUCCESS } from "./SnackBarAction"

export const ADD_GRAPH = "ADD_GRAPH";
export const UPDATE_GRAPH = "UPDATE_GRAPH";
export const DELETE_GRAPH = "DELETE_GRAPH";
export const GET_GRAPHS = "GET_GRAPHS";
export const GET_GRAPH = "GET_GRAPH";
export const SPLIT_GRAPH = "SPLIT_GRAPH";

export function addGraph(data) {
  return dispatch => {
    return axios

      .post(`http://localhost:27017/api/graphs/`, graphEncoder(data, true))

      .then((res) => {
        console.log(res.data);
        dispatch({ type: ADD_GRAPH, data: graphDecoder(res.data, true) });
        dispatch({ type: GET_SUCCESS, data: "Success to add graph" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function updateGraph(data){
  return dispatch => {
    return axios

      .put(`http://localhost:27017/api/graphs/` + data.id + "/", graphEncoder(data, true))

      .then((res) => {
        console.log(res.data);
        dispatch({ type: UPDATE_GRAPH, data: graphDecoder(res.data, true) });
        dispatch({ type: GET_SUCCESS, data: "Success to update graph" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function deleteGraph(id){
  return dispatch => {
    return axios

      .delete(`http://localhost:27017/api/graphs/` + id + "/")

      .then((res) => {
        dispatch({ type: DELETE_GRAPH, data : id });
        dispatch({ type: GET_SUCCESS, data: "Success to delete graph" });
      })
      .catch((err) => {
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function getGraphs(){
  return dispatch => {
    return axios
      .get(`http://localhost:27017/api/graphs`)

      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_GRAPHS, data: res.data.map((el) => { return graphDecoder(el, false); })});
        dispatch({ type: GET_SUCCESS, data: "Success to get graph list" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function getGraph(id, render){
  return dispatch => {
    return axios

      .get(`http://localhost:27017/api/graphs/` + id)

      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_GRAPH, data: graphDecoder(res.data, render) });
        dispatch({ type: GET_SUCCESS, data: "Success to get graph" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function splitGraph(graph){
  return dispatch => {
    console.log(graph)
    return axios

      .post(`http://localhost:27017/api/graphs/split_graph/`, graphEncoder(graph, true))

      .then((res) => {
        console.log(res.data);
        dispatch({ type: SPLIT_GRAPH, data: res.data.map((el) => { return graphDecoder(el, false); }) });
        dispatch({ type: GET_SUCCESS, data: "Success to split graph" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}