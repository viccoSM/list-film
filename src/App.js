import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux'
import {Provider} from 'react-redux'

import ListFilms from "./pages/ListFilms";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<ListFilms/>}/>
          <Route exact path="/favorites" element={<Favorites/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
