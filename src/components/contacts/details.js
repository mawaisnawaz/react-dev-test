import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
import styles from "../../styles/Modal.module.css";

const Contact = ({ contact, showContactDetails, handleCloseDetails }) => {
  return (
    <Modal show={showContactDetails} size="lg" backdrop="static" onHide={handleCloseDetails} centered>
      <Modal.Header>
        <Modal.Title>Contact Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Body>
            <Card.Title>
              Name: {contact.first_name} {contact.last_name}
            </Card.Title>
            <Card.Subtitle>Contact ID: {contact.id}</Card.Subtitle>
            <Card.Text>Email: {contact.email}</Card.Text>
            <Card.Text>Phone: {contact.phone_number}</Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="secondary" className={styles.buttonC} onClick={handleCloseDetails}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Contact;
