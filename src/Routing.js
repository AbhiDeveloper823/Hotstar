import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Detail from './DetailMovie';
import Search from './Search';

const Routing = (props) => {
  return (
    <BrowserRouter>
    	<Route exact path="/" component={App}></Route>
    	<Route exact path="/movie/:id" component={Detail}></Route>
    	<Route exact path="/movie/search/:name" component={Search}></Route>
    </BrowserRouter>
  )
}

export default Routing;