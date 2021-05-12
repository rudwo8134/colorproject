import React,{Component} from 'react'
import Colorbox from './colorbox'
import Navbar from './navbar'
import {withStyles} from "@material-ui/styles"
import style from './styles/palete'

class Palette extends Component{
    constructor(props){
        super(props);
        this.state= {level:500, format:"hex"}
        this.changelevel=this.changelevel.bind(this)
        this.changeFormet=this.changeFormet.bind(this)
    }
    changelevel(newlevel){
        this.setState({level:newlevel})
    }
    changeFormet(val){
        this.setState({format:val})
    }
    render(){
        const {classes} = this.props
        const {colors,paletteName,emoji,id} =this.props.Palette
        const {level,format} =this.state
        const colorboxes = colors[level].map((color)=>(
            <Colorbox background={color[format]} name ={color.name} key={color.id} id={color.id} paletteId={id} moreurl={`/palette/${id}/${color.id}`} showingFull={true}/>
        ))
        return(
            <div className={classes.paletter}>
             <Navbar handlechange={this.changeFormet}level={level} showingall changelevel={this.changelevel}/>   
                
                {/* navbar */}
                <div className={classes.paletterColor}>
                {/* bunch of  color boxes */}
                {colorboxes}
                </div>
                {/* footer */}
                <footer className={classes.paFooter}>
                {paletteName}
            <span className={classes.paemoji}>{emoji}</span>
                </footer>
            </div>
        )
        
    }
}

export default withStyles(style)(Palette)