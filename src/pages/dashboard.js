import React, {Fragment} from 'react'
import Menu from '../components/menu'


class dashboard extends React.Component{

  render() {
    return (
      <Fragment>
        <div className="container-fluid mt-5">
          <div className="row">
              <div className="col-md-3">
                <Menu />
              </div>
              <div className="col-md-9">
                <h2>Bienvenido al sistema de tareas hecha en React</h2>
              </div>
          </div>
        </div>
        
      </Fragment>
    )
  }

}

export default dashboard