import { useContext } from "react";
import { Button, Col, Form, Image, Modal, Row } from "react-bootstrap";
import CoffeeContext from "../utils/CoffeeContext";

function ProfileEditModal(props) {
  const { editProfile } = useContext(CoffeeContext);
  const { show, setShow, profile } = props;
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={(e) => editProfile(e)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              frist Name
            </Form.Label>
            <Col md="8">
              <Form.Control
                type="text"
                name="firstName"
                defaultValue={profile.firstName}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              last name
            </Form.Label>
            <Col md="8">
              <Form.Control
                type="text"
                name="lastName"
                defaultValue={profile.lastName}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              Password
            </Form.Label>
            <Col md="8">
              <Form.Control
                type="password"
                name="password"
                defaultValue={profile.password}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="3">
              photo
            </Form.Label>
            <Col md="8">
              <Form.Control type="file" name="avatar" />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={() => setShow(false)}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ProfileEditModal;
