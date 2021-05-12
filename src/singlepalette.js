import React,{Component} from "react"
import Colorbox from './colorbox'
import Navbar from './navbar'
import Footer from './palettefooter'
import {Link} from 'react-router-dom'
import {withStyles} from "@material-ui/styles"
import style from './styles/palettestyle'




class singlepalette extends Component{
    constructor(props){
        super(props);
        this._shades = this.gathershades(this.props.Palette, this.props.colorid)
        this.state = {format:"hex"}
        this.changeFormet=this.changeFormet.bind(this)
    }
    gathershades(palette, colorto){
        let shades = []
        let allcolor = palette.colors;

        for(let key in allcolor){
            shades = shades.concat(
                allcolor[key].filter(color => color.id === colorto)
            )
        }
        return shades.slice(1)
    }
    changeFormet(val){
        this.setState({format:val})
    }
  render(){
      const {format} = this.state
      const {classes} = this.props
      const {paletteName, emoji, id} = this.props.Palette
      const colorboxes = this._shades.map(color=>(
          <Colorbox key={color.name} name={color.name} background={color[format]} showingFull={false}/>
      ))
      return(
          <div className={classes.paletter}>
              <Navbar handlechange={this.changeFormet} showingall = {false}/>
              <div className={classes.paletterColor}>
                  {colorboxes}
                  <div className={classes.goback}>
                      <Link to={`/palette/${id}`}>GOback!</Link>
                      </div>
              </div>
              <Footer paletteName={paletteName} emoji={emoji}/>
          </div>
      )
  }
}

export default withStyles(style)(singlepalette) 