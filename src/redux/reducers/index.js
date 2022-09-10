import {combineReducers} from "redux";

import listFilm from "./ListFilm";
import detailFilm from "./DetailFilm"

const reducer = combineReducers({
    listFilm,
    detailFilm
})

export default reducer