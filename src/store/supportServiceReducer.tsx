import {seviceList} from '../assets/data/seviceList';

export const GET_SERVICE_LIST = "GET_SERVICE_LIST";

const initialState = {
  services: seviceList
}

const supportServiceReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case GET_SERVICE_LIST:
      return {
        ...state,
        services: action.payload
      };
      default:
        return state;
  }
}

export default supportServiceReducer
