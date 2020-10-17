import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import home from '../pages/home'
import NotFound from '../pages/404'
import dashboard from '../pages/dashboard'


const App = () => (
    
    <BrowserRouter>
        
        <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/inicio" component={home} />
            <Route exact path="/dashboard" component={dashboard} />
            <Route component={NotFound}/>
        </Switch>
        
        
    </BrowserRouter>
    
)

export default App