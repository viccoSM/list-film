import reducer from '../../utility'

export const LIST_FILMS_API = 'LIST_FILMS_API'
export const LIST_FILMS_SUCCESS = 'LIST_FILMS_SUCCESS'
export const LIST_FILMS_ERROR = 'LIST_FILMS_ERROR'

const initialState = {
  items: [],
  loading: false,
  error: '',
}

const reducers = {
  [LIST_FILMS_API]: (state) => ({
    ...state,
    loading: true
  }),
  [LIST_FILMS_SUCCESS]: (state, {payload}) => ({
    ...state,
    items: payload.items,
    loading: false
  }),
  [LIST_FILMS_ERROR]: (state, {payload}) => ({
    ...state,
    error: payload.error
  })
}

export const getListFilmsItems = (state) => state.listFilm.items
export const getListFilmsError = (state) => state.listFilm.error

export default reducer(Object.assign(reducers), initialState)