import React,{Component} from "react";
import {Link} from 'react-router-dom'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {withStyles} from "@material-ui/styles"
import style from "./styles/navbarstyle"


class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={format:"hex", open:false}
        this.handlechange= this.handlechange.bind(this)
        this.closesnackbar=this.closesnackbar.bind(this)
    }
    handlechange(e){
        this.setState({format:e.target.value, open:true})
        this.props.handlechange(e.target.value)
    }
    closesnackbar(){
        this.setState({open:false})
    }
  render(){
        const {level,changelevel,showingall,classes} = this.props
        const {format} = this.state
      return(
          <header className={classes.navbar}>
              <div className={classes.logo}>
                <Link to="/"><a>Eric's color</a></Link>
              </div>
            {showingall &&(
              <div >
                <span>Level: {level}</span>
                    <div className={classes.slider}>
                    <Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={changelevel}/>
                    </div>
              </div>
              )}
              <div className={classes.selectContainer}>
                  <Select value={format} onChange={this.handlechange}>
                      <MenuItem value="hex">Hex#ffffff</MenuItem>
                      <MenuItem value="rgb">rgb(255.255.255)</MenuItem>
                      <MenuItem value="rgba">rgba(255.255.255.0)</MenuItem>
                  </Select>
              </div>
             <Snackbar anchorOrigin={{vertical:"bottom", horizontal:"left"}} open={this.state.open}
             autoHideDuration={3000} message={<span id="message-id">format changed to {format.toUpperCase()}</span>} 
             ContentProps={{
                 "aria-describedby": "message-id"
             }}
             onClose={this.closesnackbar}
             action={[<IconButton onClick={this.closesnackbar} color='inherit' key="close"
             aria-label="close">
                 <CloseIcon/>
             </IconButton>]}/>
          </header>
      )
  }
}

export default withStyles(style)(Navbar)