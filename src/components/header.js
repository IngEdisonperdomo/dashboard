import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './modal'
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router'

class Header extends React.Component {

  constructor(props){
    super(props);
    this.handleIngreso = this.handleIngreso.bind(this);
  }

  state = {
    modalIsOpen: false,
    login: false
  }

  handleOpenModal = e => {
      this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
      this.setState({ modalIsOpen: false });
  };

  handleIngreso = e => {
    this.setState({ login: true });
  };

  handleLogout = e => {
    this.setState({login:false})
    this.props.history.push('/inicio')
  }

  render(){ 

    let logout;
    let ruta;
    if (this.state.login) {
      ruta = '/dashboard';
      logout = <Button to="/inicio" variant='success' className="mt-3 mb-3" onClick={this.handleLogout}>Logout</Button>;
    }else{
      ruta = '/inicio';
      logout = <Button variant='success' className="mt-3 mb-3" onClick={this.handleOpenModal}>Login</Button>;
    }

  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to={ruta} className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
            </ul>
          </div>
          { logout }

        </nav>
        <Modal 
					onOpenModal={this.handleOpenModal}
					onCloseModal={this.handleCloseModal}
          modalIsOpen={this.state.modalIsOpen} 
          Ingresar={this.state.handleIngreso}
        />
      </React.Fragment>
    )
  }
}
    

export default withRouter(Header)
