import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import home from '../pages/home'
import NotFound from '../pages/404'
import Header from '../components/header'
import Footer from '../components/footer'



import dashboard from '../pages/dashboard'
import tareas from '../pages/tareas'
import tareaslist from '../pages/tareaslist'
import articulo from '../pages/articulo'
import articulolist from '../pages/articulolist'



const App = () => (
    
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/inicio" component={home} />
            <Route exact path="/dashboard" component={dashboard} />

            <Route exact path="/tareas" component={tareas} />
            <Route exact path="/tareas/list" component={tareaslist} />
            <Route exact path="/articulo" component={articulo} />
            <Route exact path="/articulo/list" component={articulolist} />
            <Route component={NotFound}/>
        </Switch>
        <Footer />
        
        
    </BrowserRouter>
    
)

export default App