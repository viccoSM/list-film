import {LIST_FILMS_API, LIST_FILMS_ERROR, LIST_FILMS_SUCCESS} from "./reducers/ListFilm";
import axios from "axios";
import {DETAIL_FILMS_API, DETAIL_FILMS_ERROR, DETAIL_FILMS_SUCCESS} from "./reducers/DetailFilm";

export function listFilmsApi (search) {

  return (dispatch) => {
    // loading
    dispatch({type: LIST_FILMS_API})

    // api
    axios({
      method: 'GET',
      url:'http://www.omdbapi.com',
      params:{
        apiKey: 'e56c9684',
        type: 'movie',
        s: search
      }
    }).then(({data}) => {
      if(data.Response === 'False') {
        dispatch({
          type: LIST_FILMS_ERROR,
          payload: {error: data.Error}
        })
      } else {
        dispatch({
          type: LIST_FILMS_SUCCESS,
          payload: {
            items: data?.Search || []
          }
        })
      }
    }).catch((error) => {
      dispatch({
        type: LIST_FILMS_ERROR,
        payload: {error}
      })
    })
  }
}

export function detailFilm (id) {
  return (dispatch) => {
    dispatch({type: DETAIL_FILMS_API})

    // api
    axios({
      method: 'GET',
      url:'http://www.omdbapi.com',
      params:{
        apiKey: 'e56c9684',
        type: 'movie',
        i: id
      }
    }).then(({data}) => {
      if(data.Response === 'False') {
        dispatch({
          type: DETAIL_FILMS_ERROR,
          payload: {error: data.Error}
        })
      } else {
        dispatch({
          type: DETAIL_FILMS_SUCCESS,
          payload: {
            data: data || {}
          }
        })
      }
    }).catch((error) => {
      dispatch({
        type: DETAIL_FILMS_ERROR,
        payload: {error}
      })
    })
  }
}