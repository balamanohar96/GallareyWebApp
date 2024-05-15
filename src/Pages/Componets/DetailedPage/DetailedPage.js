import React from "react";
import Modal from "react-bootstrap/Modal";
import "./DetailedPage.css";
import { headings } from "../../Constants/Headings";

const DetailedPage = (props) => {
  let dd={...props}
  console.log(dd)
  const { title, id, farm, server, secret } = props.singlepageinfo[0];
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-center"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{headings.SelectImages}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="container-image">
        <div>
          <p>
            <span>Title: </span>
            {title}
          </p>
          <p>
            <span>ID: </span>
            {id}
          </p>
        </div>

        <img
          className="detailedimage"
          src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
          alt="imagesLogo"
        />
      </Modal.Body>
    </Modal>
  );
};

export default DetailedPage;
