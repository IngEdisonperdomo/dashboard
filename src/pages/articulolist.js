import React from 'react'
import Menu from '../components/menu'

class Articulolist extends React.Component{

  render(){
    return (
      <React.Fragment>
        <div className="container-fluid mt-5">
          <div className="row">
              <div className="col-md-3">
                <Menu />
              </div>
              <div className="col-md-9">
                <h1>Aqui muestro las listado articulo</h1>
              </div>
          </div>
        </div>

      </React.Fragment>
    )
  }

}
export default Articulolist