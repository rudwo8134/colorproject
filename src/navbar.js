import React,{Component} from "react"
import 'rc-slider/assets/index.css';
import './navbar.css'
import Slider from 'rc-slider';

class Navbar extends Component{
  render(){
        const {level,changelevel} = this.props
      return(
          <header className="navbar">
              <div className="logo">
                <a href="#">eric's color</a>
              </div>

              <div className="slider-container">
                <span>Level: {level}</span>
                    <div className="slider">
                    <Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={changelevel}/>
                    </div>
              </div>
             
          </header>
      )
  }
}

export default Navbar