import axios from "../../helpers/axios";
import * as actionTypes from "./actionTypes";

import { DEFAULT_COMPANY_ID } from "../../constants";

export const getContacts = () => ({
  type: actionTypes.GET_CONTACTS,
});

export const getContactsSuccess = (contacts) => ({
  type: actionTypes.GET_CONTACTS_SUCCESS,
  payload: contacts,
});

export const getContactsFailure = () => ({
  type: actionTypes.GET_CONTACTS_FAILURE,
});

export const resetContacts = () => ({
  type: actionTypes.RESET_CONTACTS,
});

export function fetchContacts(countryId, queryStr, pageNo) {
  return async (dispatch) => {
    if (pageNo === 1) {
      dispatch(resetContacts());
    }
    dispatch(getContacts());

    const params = {
      companyId: DEFAULT_COMPANY_ID,
      page: pageNo,
    };

    if (countryId !== 0) params["countryId"] = countryId;
    if (queryStr.length > 0) params["query"] = queryStr;

    try {
      const resp = await axios.get("/contacts.json", {
        params,
      });
      const contacts = [];
      for (let id in resp.data.contacts) {
        contacts.push(resp.data.contacts[id]);
      }
      dispatch(getContactsSuccess(contacts));
    } catch (error) {
      dispatch(getContactsFailure());
    }
  };
}
