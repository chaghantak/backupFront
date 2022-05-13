import axios from 'axios';
import { BASE_URL } from "../../views/api";

export const GET_CAMPAIGNS = 'GET_CAMPAIGNS';

export function getCampaigns() {
    return dispatch => {
        return axios.post(`${BASE_URL}/campaign/campaign-list`)
            .then((res) => {
                dispatch({
                    type: GET_CAMPAIGNS,
                    data: res.data.items
                })
            });
    }
}
