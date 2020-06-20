import React, { Component } from 'react'
import M from  'materialize-css/dist/js/materialize.min.js';
import Main from './components/Main'
import {BrowserRouter} from 'react-router-dom'
import './index.css'


class App extends Component{
  componentDidMount() {
    var elems = document.querySelectorAll('#testimonial');
    M.Carousel.init(elems, {});

    let sidenav = document.querySelector('#slide-out')
    M.Sidenav.init(sidenav, {})
  } 
  render(){
    return(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    )
  }
}

export default App;