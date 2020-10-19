import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './modal'


class Header extends React.Component {

  state = {
    modalIsOpen: false
  }

  handleOpenModal = e => {
      this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
      this.setState({ modalIsOpen: false });
  };

  render(){ 

  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/inicio" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
            </ul>
          </div>
          <button className="btn btn-success" onClick={this.handleOpenModal}>Login</button>

        </nav>
        <Modal 
					onOpenModal={this.handleOpenModal}
					onCloseModal={this.handleCloseModal}
        	modalIsOpen={this.state.modalIsOpen} 
        />
      </React.Fragment>
    )
  }
}
    

export default Header
