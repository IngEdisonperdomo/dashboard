import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component{


  render(){
    return (
      <React.Fragment>
        <div className="list-group">
          <Link to="/dashboard"  className="list-group-item list-group-item-action active">Inicio</Link>
          <Link to="/tareas" className="list-group-item list-group-item-action ">Crear Tareas</Link>
          <Link to="/tareas/list" className="list-group-item list-group-item-action">Listado de Tareas</Link>
          <Link to="/articulo" className="list-group-item list-group-item-action">Comprar Articulos</Link>
          <Link to="/articulo/list" className="list-group-item list-group-item-action">Listado Productos</Link>
          
        </div>
      </React.Fragment>
    )
  }

}
export default Menu