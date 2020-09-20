import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  searchKeyword: "",
  isOnlyEven: false,
  countryId: 0,
  pageNo: 1,
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.UPDATE_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.payload,
        pageNo: 1,
      };

    case actionTypes.UPDATE_ONLY_EVEN_FILTER:
      return {
        ...state,
        isOnlyEven: action.payload,
      };

    case actionTypes.UPDATE_PAGE_NO:
      return {
        ...state,
        pageNo: action.payload,
      };

    case actionTypes.INCREMENT_PAGE_NO:
      return {
        ...state,
        pageNo: state.pageNo + 1,
      };

    case actionTypes.UPDATE_COUNTRY:
      return {
        ...state,
        countryId: action.payload,
        pageNo: 1,
      };

    default:
      return state;
  }
}
