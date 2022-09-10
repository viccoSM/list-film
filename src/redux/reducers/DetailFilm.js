import reducer from '../../utility'

export const DETAIL_FILMS_API = 'DETAIL_FILMS_API'
export const DETAIL_FILMS_SUCCESS = 'DETAIL_FILMS_SUCCESS'
export const DETAIL_FILMS_ERROR = 'DETAIL_FILMS_ERROR'

const initialState = {
  data: {},
  loading: false,
  error: '',
}

const reducers = {
  [DETAIL_FILMS_API]: (state) => ({
    ...state,
    loading: true
  }),
  [DETAIL_FILMS_SUCCESS]: (state, {payload}) => ({
    ...state,
    data: payload.data,
    loading: false
  }),
  [DETAIL_FILMS_ERROR]: (state, {payload}) => ({
    ...state,
    error: payload.error
  })
}

export const getDetailFilmsData = (state) => state.detailFilm.data
export const getDetailFilmsError = (state) => state.detailFilm.error

export default reducer(Object.assign(reducers), initialState)