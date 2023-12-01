import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const Example = (title, about) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="link-proj" onClick={handleShow}>
        Descrição
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title} </Modal.Title>
        </Modal.Header >
        <Modal.Body>
          <p className='modal-description'>Tecnlogias usadas no projeto:</p>
          <p className='modal-technology'>{about}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}