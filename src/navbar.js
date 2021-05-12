import React,{Component} from "react";
import 'rc-slider/assets/index.css';
import './navbar.css';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={format:"hex"}
        this.handlechange= this.handlechange.bind(this)
    }
    handlechange(e){
        this.setState({format:e.target.value})
        this.props.handlechange(e.target.value)
    }
  render(){
        const {level,changelevel} = this.props
        const {format} = this.state
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
              <div className="select-container">
                  <Select value={format} onChange={this.handlechange}>
                      <MenuItem value="hex">Hex#ffffff</MenuItem>
                      <MenuItem value="rgb">rgb(255.255.255)</MenuItem>
                      <MenuItem value="rgba">rgba(255.255.255.0)</MenuItem>
                  </Select>
              </div>
             
          </header>
      )
  }
}

export default Navbar