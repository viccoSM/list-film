import React from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {useSelector} from "react-redux";
import {getDetailFilmsData} from "../redux/reducers/DetailFilm";

export default function ModalDetail ({toggle, isOpen}) {
  const data = useSelector(getDetailFilmsData)

  const style = {
    height: '200px',
    background: `url("${data?.Poster}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return(
    <Modal isOpen={isOpen}>
      <ModalHeader toggle={toggle}>
        {data?.Title}
      </ModalHeader>
      <ModalBody>
        <div className='bg-danger rounded w-100' style={style}/>
        <h3>{data?.Title}, ({data?.Year})</h3>
        <p>Released: {data?.Released}</p>
        <p>Director: {data?.Director}</p>
        <p>{data?.Plot}</p>
      </ModalBody>
    </Modal>
    )
};
