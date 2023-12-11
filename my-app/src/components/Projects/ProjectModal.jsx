import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const ModalProject = (title, about, technology) => {
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
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header >
        <Modal.Body>
          <p className='modal-about'>{about}</p>
        </Modal.Body>
        <Modal.Footer>
          <p className='modal-contrast'>Tecnlogias usadas no projeto:</p>
          <p className='modal-technology'>{technology}</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}