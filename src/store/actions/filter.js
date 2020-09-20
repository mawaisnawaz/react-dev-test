import * as actionTypes from "./actionTypes";

export const incrementPageNo = () => ({
  type: actionTypes.INCREMENT_PAGE_NO,
});

export const updateSearchKeyword = (keyword) => ({
  type: actionTypes.UPDATE_SEARCH_KEYWORD,
  payload: keyword,
});

export const updateEvenFilter = (isOnlyEven) => ({
  type: actionTypes.UPDATE_ONLY_EVEN_FILTER,
  payload: isOnlyEven,
});

export const updatePageNo = (pageNo) => ({
  type: actionTypes.UPDATE_PAGE_NO,
  payload: pageNo,
});

export const updateCountry = (countryId) => ({
  type: actionTypes.UPDATE_COUNTRY,
  payload: countryId,
});
