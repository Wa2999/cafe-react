import { Modal } from "react-bootstrap";

function FollowModal(props) {
  const { show, setShow } = props;

  return (
    <>
      <>
        <Modal show={show} onHide={() => setShow(false)} className="modle">
          <Modal.Header closeButton>
            <Modal.Title>Plz Log In Frisr</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            oh,TO LIKE THE PRODUCT U MUST <a href="/login">Sign In</a> OR
            <a href="/signup">Create one</a> !
          </Modal.Body>
        </Modal>
      </>
    </>
  );
}

export default FollowModal;
