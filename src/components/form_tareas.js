import React from 'react'
import { withRouter } from 'react-router'
//import img from '../assets/images/red.jpg'
//import urlGet from '../config'

class Form_tareas extends React.Component {
  

  state = {
    form:{
      nombre:'', 
      email:'', 
      password:'',
    },
    loading:false,
    error: null
  }

  handleChange = e => {

    //console.log(e.target.value)
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.props.history.push('/tareas/list')
    
  //  try {
  //      let config = {
  //       method: 'POST',
  //       headers: {
  //         'Accept':'application/json',
  //         'Content-Type':'application/json'
  //       },
  //       body: JSON.stringify(this.state.form)
  //     }

  //     let res = await fetch(urlGet, config)
  //     let json = await res.json();
  //     console.log(json);

      

  //     this.setState({
  //       loading: false
  //     }) 

      

  //   } catch (error) {
  //     this.setState({
  //       loading: false,
  //       error
  //     })
  //   } 
  }


  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">

            
            <div className="col-md-12 mt-4">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="Nombre">Nombre</label>
                  <input type="text" 
                  name="nombre" 
                  className="form-control" 
                  id="nombre" 
                  aria-describedby="emailHelp" 
                  onChange={this.handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="descripcion">Descripción</label>
                  <input type="text"  
                  name="descripcion" 
                  className="form-control" 
                  id="descripcion" 
                  aria-describedby="emailHelp" 
                  onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image</label>
                  <input type="text" 
                  name="image" 
                  className="form-control" 
                  id="image" 
                  onChange={this.handleChange}/>
                </div>

                <button 
                  type="submit"  
                  className="btn btn-primary"
                  
                  >Crear Tarea</button>
              </form>
            </div>

          </div>

        </div>

      </React.Fragment>
    )
  }
}

export default withRouter(Form_tareas) 
