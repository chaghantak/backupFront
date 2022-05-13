import { GET_CAMPAIGNS } from "../actions/DomainActions";

const initialState = {
    campaign : {},
    campaigns : [],
};

const DomainReducer = function(state = initialState, action) {
    switch (action.type) {
        case GET_CAMPAIGNS:
            return {
                ...state,
                campaigns: action.data
            }
        default:
            return state;
    }
}

export default DomainReducer;
