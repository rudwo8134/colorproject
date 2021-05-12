import React,{Component} from "react"
import {Link} from 'react-router-dom'

class palettelist extends Component{
  render(){
      const {palette} = this.props
      return(
          <div>
              <h1>Eric's Colors</h1>
              {palette.map(pa=>(
                  <p>
                       <Link to={`/palette/${pa.id}`}>{pa.paletteName}</Link>
                  </p>
                 
              ))}
          </div>
      )
  }
}

export default palettelist 