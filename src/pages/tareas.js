import React from 'react'
import Menu from '../components/menu'
import TareasForm from '../components/form_tareas'

class Tareas extends React.Component{

  render(){
    return (
      <React.Fragment>
        <div className="container-fluid mt-5">
          <div className="row">
              <div className="col-md-3">
                <Menu />
              </div>
              <div className="col-md-9">
                <h3>Crear las tareas</h3>
                <TareasForm />
              </div>
          </div>
        </div>

      </React.Fragment>
    )
  }

}
export default Tareas