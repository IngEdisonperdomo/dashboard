import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import 'popper.js/dist/popper'


import home from '../pages/home'
import NotFound from '../pages/404'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/inicio" component={home} />
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App