import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import CardFilm from "../components/CardFilm";
import ModalDetail from "../components/ModalDetail";
import {useDispatch} from "react-redux";
import {detailFilm} from "../redux/actions";

const ListFilms = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [favorites, setFavorites] = useState([])
  const dispatch = useDispatch()

  const toggle = () => setIsOpen(!isOpen)

  const openModal = (id) => {
    dispatch(detailFilm(id))
    setIsOpen(!isOpen)
  }

  const handleRemove = (item) => {
    const newFavorites = [...favorites]
    const index = newFavorites.findIndex(({imdbID}) => imdbID === item.imdbID)
    newFavorites.splice(index, 1)

    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('favorites'))
    if (getLocal) {
      setFavorites([...getLocal])
    }
  }, [favorites.length])

  return (
    <Container>
      <h2>Favorite</h2>
      <Row>
        {favorites.length > 0 ? (
          favorites?.map((item, idx) => (
            <Col sm='6' key={idx}>
              <CardFilm
                data={item}
                openDetail={() => openModal(item.imdbID)}
                handleFavorite={() => handleRemove(item)}
                remove={JSON.parse(localStorage.getItem('favorites'))?.some(({imdbID}) => imdbID === item.imdbID)}
              />
            </Col>
          ))
        ) : (
          <div className='h-100 d-flex justify-content-center align-items-center'>
            <h3 className='text-secondary'>
              there is no favorite movie list
            </h3>
          </div>
        )}
      </Row>
      <ModalDetail
        toggle={toggle}
        isOpen={isOpen}
      />
    </Container>
  );
}

export default ListFilms;