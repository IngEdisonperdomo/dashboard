import React from 'react'
import { withRouter } from 'react-router'
import img from '../assets/images/red.jpg'
import {Alert} from 'react-bootstrap';
//import urlGet from '../config'

class Form extends React.Component {
  

  state = {
    form:{
      nombre:'', 
      email:'', 
      password:'',
    },
    loading:false,
    error: true,
    errors: null,
    button: null,
    msg:null
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

    
    if(!this.state.form.nombre){
      this.setState({
        error:null,
        msg: "nombre es requerido"
      })
    }else if(!this.state.form.email){
        this.setState({
          error:null,
          msg: "email es requerido"
        })

  }else if(!this.state.form.password){
        this.setState({
          error:null,
          msg: "password es requerido"
        })
      
    }else{
      this.props.history.push('/dashboard')
    }

    
    
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
    let errors;
    
    if (!this.state.error) {
      errors = <Alert variant='danger' className="mt-3 mb-3">{this.state.msg} Requerido</Alert>;
    }


    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            
            <div className="col-md-6 mt-4">
              
              <img src={img} className="img-fluid" alt="red" />
            </div>
            <div className="col-md-6 mt-4">
            

              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="Nombre">Título</label>
                  <input type="text" 
                  name="nombre" 
                  className="form-control" 
                  id="nombre" 
                  aria-describedby="emailHelp" 
                  onChange={this.handleChange} />

                  
                  
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email"  
                  name="email" 
                  className="form-control" 
                  id="email" 
                  aria-describedby="emailHelp" 
                  onChange={this.handleChange}/>

                  

                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" 
                  name="password" 
                  className="form-control" 
                  id="password" 
                  onChange={this.handleChange}/>

                  

                </div>

                <button 
                  type="submit"  
                  className="btn btn-primary"
                  
                  >Crear Cuenta</button>

                  {errors}
              </form>
            </div>

          </div>

        </div>

      </React.Fragment>
    )
  }
}

export default withRouter(Form) 
