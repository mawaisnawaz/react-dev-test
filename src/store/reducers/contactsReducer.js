import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  data: [],
  loading: false,
  hasErrors: false,
};

export default function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CONTACTS:
      return { ...state, loading: true, hasErrors: false };
    case actionTypes.GET_CONTACTS_SUCCESS:
      return { data: [...state.data, ...action.payload], loading: false, hasErrors: false };
    case actionTypes.GET_CONTACTS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    case actionTypes.RESET_CONTACTS:
      return initialState;
    default:
      return state;
  }
}
