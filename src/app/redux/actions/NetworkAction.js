import axios from "axios";
import { networkEncoder, networkDecoder } from "../../common"
import { GET_ERROR, GET_SUCCESS } from "./SnackBarAction"

export const ADD_NETWORK = "ADD_NETWORK";
export const UPDATE_NETWORK = "UPDATE_NETWORK";
export const DELETE_NETWORK = "DELETE_NETWORK";
export const GET_NETWORKS = "GET_NETWORKS";
export const GET_NETWORK = "GET_NETWORK";

export function addNetwork(data) {
  return dispatch => {
    return axios

      .post(`http://localhost:27017/api/networks/`, networkEncoder(data, true))

      .then((res) => {
        console.log(res.data);
        dispatch({ type: ADD_NETWORK, data: networkDecoder(res.data, true) });
        dispatch({ type: GET_SUCCESS, data: "Success to add network" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function updateNetwork(data){
  return dispatch => {
    return axios

      .put(`http://localhost:27017/api/networks/` + data.id + "/", networkEncoder(data, true))

      .then((res) => {
        console.log(res.data);
        dispatch({ type: UPDATE_NETWORK, data: networkDecoder(res.data, true) });
        dispatch({ type: GET_SUCCESS, data: "Success to update network" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function deleteNetwork(id){
  return dispatch => {
    return axios

      .delete(`http://localhost:27017/api/networks/` + id + "/")

      .then((res) => {
        dispatch({ type: DELETE_NETWORK, data : id });
        dispatch({ type: GET_SUCCESS, data: "Success to delete network" });
      })
      .catch((err) => {
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function getNetworks(){
  return dispatch => {
    return axios

      .get(`http://localhost:27017/api/networks`)

      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_NETWORKS, data: res.data.map((el) => { return networkDecoder(el, false); })});
        dispatch({ type: GET_SUCCESS, data: "Success to get network list" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}

export function getNetwork(id, render){
  return dispatch => {
    return axios

      .get(`http://localhost:27017/api/networks/` + id)

      .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_NETWORK, data: networkDecoder(res.data, render) });
        dispatch({ type: GET_SUCCESS, data: "Success to get network" });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_ERROR, data: err.message });
      });
  }
}