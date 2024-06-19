import React, { useState, useEffect } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

const ModalLink = ({ show, handleClose, linkActual, title, children  }) => {

  const [modalLink, setModalLink] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setModalLink(linkActual);
  }, [show]);

  const change = (e) => {
    const { name, value } = e.target;
    setModalLink({ ...modalLink, [name]: value });
  };

  const env = async (e) => {
    e.preventDefault();
    setLoading(true);
    let url = `${import.meta.VITE_APP_API}/bannerLink.php`;
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(modalLink),
    });
    const data = await res.json();
    console.log(data);
    data > 0 ? <></> :Swal.fire({
        title: "erorr",
        icon: "warning",
        timer: 2000,
        toast: true,
        showConfirmButton: false,
      });
      setLoading(false)
    handleClose();
  };

  return (
      // <div className="modal-overlay">
      //   <div className="modal-content">
      //     <h2>{title}</h2>
      //     <div className="modal-text">{children}</div>
      //     <button className="button-modal" onClick={handleClose}>Cerrar</button>
      //   </div>
      // </div> 
      <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Link Banners</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
            type="text"
            onChange={change}
            width="90%"
            autoFocus
            placeholder="Link Banners"
            name="link"
            className="input-guia"
            value={modalLink.link}
          />
        </Modal.Body>
        <Modal.Footer>
       

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={env}>
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Aplicar"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLink