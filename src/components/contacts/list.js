import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import { createSelector } from "reselect";
import ContactsModal from "./modal";
import CustomScrollbars from "./scrollbar";
import * as actions from "../../store/actions/index";

const getContacts = (state) => state.contacts.data;
const evenFilter = (state) => state.filter.isOnlyEven;
const filterEvenContacts = createSelector([getContacts, evenFilter], (contacts, onlyEven) => {
  if (onlyEven) return contacts.filter((contact) => contact.id % 2 === 0);
  return contacts;
});

const Contacts = ({
  contactsData,
  countryId,
  fetchData,
  hasErrors,
  loading,
  title,
  nextPage,
  pageNo,
  searchKeyword,
  setCountry,
  showContactsList,
  handleSelectedContact,
}) => {
  const setCountryCallback = useCallback(() => setCountry(countryId), [countryId, setCountry]);
  useEffect(() => {
    setCountryCallback();
  }, [setCountryCallback]);

  useEffect(() => {
    fetchData(countryId, searchKeyword, pageNo);
  }, [countryId, searchKeyword, pageNo, fetchData]);

  const onReachedToBottom = useCallback(() => {
    nextPage();
  }, [nextPage]);

  return (
    <ContactsModal title={title} isOpen={showContactsList} isLoading={loading}>
      {!hasErrors && (
        <CustomScrollbars onReachedBottom={onReachedToBottom} style={{ height: 300 }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {contactsData.map((contact, id) => (
                <tr key={id} onClick={() => handleSelectedContact(contact)}>
                  <td>{contact.id}</td>
                  <td>
                    {contact.first_name} {contact.last_name}
                  </td>
                  <td>{contact.email}</td>
                  <td>{contact.phone_number}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CustomScrollbars>
      )}
      {hasErrors && "Error!"}
    </ContactsModal>
  );
};

const mapStateToProps = (state) => ({
  contactsData: filterEvenContacts(state),
  contactsState: state.contacts,
  hasErrors: state.contacts.hasErrors,
  loading: state.contacts.loading,
  pageNo: state.filter.pageNo,
  searchKeyword: state.filter.searchKeyword,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (countryId, searchKey, pageNo) => dispatch(actions.fetchContacts(countryId, searchKey, pageNo)),
  nextPage: () => dispatch(actions.incrementPageNo()),
  setCountry: (countryId) => dispatch(actions.updateCountry(countryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
