import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import Contacts from "./components/contacts/list";
import Contact from "./components/contacts/details";
import styles from "./styles/Modal.module.css";
import { COUNTRY_ALL, COUNTRY_US } from "./constants";

const App = () => {
  const [showContactsList, setShowContactsList] = useState(true);
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [selectedContact, SetSelectedContact] = useState(null);

  const handleSelectedContact = (contact) => {
    setShowContactsList(false);
    SetSelectedContact(contact);
    setShowContactDetails(true);
  };

  const handleCloseDetails = () => {
    setShowContactDetails(false);
    setShowContactsList(true);
  };

  return (
    <BrowserRouter>
      <Container className="text-center">
        <Link to="/all-contacts">
          <Button variant="primary" className={styles.buttonA}>
            All Contacts
          </Button>
        </Link>
        <Link to="/us-contacts">
          <Button variant="primary" className={styles.buttonB}>
            US Contacts
          </Button>
        </Link>

        {selectedContact !== null && (
          <Contact contact={selectedContact} showContactDetails={showContactDetails} handleCloseDetails={handleCloseDetails} />
        )}

        <Switch>
          <Route exact path="/all-contacts">
            <Contacts
              title="All Contacts"
              countryId={COUNTRY_ALL}
              showContactsList={showContactsList}
              handleSelectedContact={handleSelectedContact}
            />
          </Route>
          <Route exact path="/us-contacts">
            <Contacts title="US Contacts" countryId={COUNTRY_US} showContactsList={showContactsList} handleSelectedContact={handleSelectedContact} />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
