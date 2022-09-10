import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Input, Row} from "reactstrap";
import CardFilm from "../components/CardFilm";
import ModalDetail from "../components/ModalDetail";
import {useDispatch, useSelector} from "react-redux";
import {getListFilmsError, getListFilmsItems} from "../redux/reducers/ListFilm";
import {detailFilm, listFilmsApi} from "../redux/actions";

const ListFilms = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [favorite, setFavorite] = useState([])
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const items = useSelector(getListFilmsItems)
  const error = useSelector(getListFilmsError)

  const toggle = () => setIsOpen(!isOpen)

  const openModal = (id) => {
    dispatch(detailFilm(id))
    setIsOpen(!isOpen)
  }

  const handleFavorite = (item) => {
    const newFavorites =  [...favorite]
    const index = newFavorites.findIndex(({imdbID}) => imdbID === item.imdbID)

    if (index >= 0) {
      newFavorites.splice(index, 1)
    } else {
      newFavorites.push(item)
    }

    setFavorite(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const handleChange = (e) => {
    const {value} = e.target
    setSearch(value)
  }

  const handleClick = () => {
    dispatch(listFilmsApi(search))
  }

  useEffect(() => {
    const getLocal = JSON.parse(localStorage.getItem('favorites'))
    if (getLocal) {
      setFavorite([...getLocal])
    }
  }, [favorite.length])

  return (
    <Container>
      <h2>List</h2>
      <div className="d-flex align-items-center  w-25 mb-3">
        <Input
          name='search'
          placeholder='Search by Title'
          onChange={handleChange}
        />
        <Button outline className='ms-1' onClick={handleClick}>
          Search
        </Button>
      </div>
      <Row>
        {items.length > 0 ? (
          items?.map((item, idx) => (
            <Col sm='6' key={idx}>
              <CardFilm
                data={item}
                openDetail={() => openModal(item.imdbID)}
                handleFavorite={() => handleFavorite(item)}
                remove={JSON.parse(localStorage.getItem('favorites'))?.some(({imdbID}) => imdbID === item.imdbID)}
              />
            </Col>
          ))
        ) : (
          <div className='h-100 d-flex justify-content-center align-items-center'>
            <h3 className='text-secondary'>{error || 'Please Search Movie'}</h3>
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