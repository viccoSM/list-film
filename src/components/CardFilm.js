import React from 'react';
import {Card, CardBody, Col, Row, Button} from "reactstrap";

const CardFilm = ({openDetail, data, handleFavorite, remove= false}) => (
  <Card className='card-film border-0 shadow-lg mb-3'>
    <CardBody>
      <Row>
        <Col sm='4'>
          <div className="card-film__img">
            <img
              className='mh-100 rounded'
              style={{cursor: 'pointer'}}
              src={data?.Poster}
              alt=''
              onClick={openDetail}
            />
          </div>
        </Col>
        <Col sm='8'>
          <h2>{data?.Title} ({data.Year})</h2>
          <p className='text-secondary'>imdbId: {data.imdbID}</p>
          <Button onClick={handleFavorite} color={remove ? 'danger' : 'primary'}>
            {remove ? 'Remove' : 'Favorite'}
          </Button>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default CardFilm;