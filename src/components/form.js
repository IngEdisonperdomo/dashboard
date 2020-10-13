import React, { Fragment } from 'react'
import img from '../assets/images/red.jpg'

const Form = () => (
  <Fragment>
    <div className="container">
      <div className="row">

      <div className="col-md-6 mt-4">
        <img src={img} className="img-fluid" alt="red"/>
      </div>
      <div className="col-md-6 mt-4">
        <form>
          <div className="form-group">
            <label for="Nombre">Nombre</label>
            <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>

          <button type="submit" className="btn btn-primary">Crear Cuenta</button>
        </form>
      </div>

      </div>
      
    </div>

  </Fragment>

)
export default Form
