import React from 'react'
import Menu from '../components/menu'
import Product from '../components/products'

class TareasList extends React.Component{

  state = {
    data:[{
      "id": 1,
      "title": "prueba",
      "description": "esta es la primera descripcion"
    },{
      "id":2,
      "title": "prueba2",
      "description": "esta es la Segunda descripcion"
      },
    ] 
  }

  render(){
    const data = this.state.data
    return (
      <React.Fragment>
        <div className="container-fluid mt-5">
          <div className="row">
              <div className="col-md-3">
                <Menu />
              </div>
              <div className="col-md-9">
                <h1>Aqui muestro las Lista tareas</h1>
                <div className="row">
                  {
                    data.map(data => {
                      return (
                        <div className="col-md-4">
                          <Product 
                            key={data.id} 
                            title={data.title} 
                            description={data.description}
                            />
                        </div>
                      )
                    })
                  }

                  
                </div>
              </div>
          </div>
        </div>

      </React.Fragment>
    )
  }

}
export default TareasList