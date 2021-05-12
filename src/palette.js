import React,{Component} from 'react'
import Colorbox from './colorbox'
import Navbar from './navbar'
import './palette.css';
import Footer from './palettefooter'



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
        const {colors,paletteName,emoji,id} =this.props.Palette
        const {level,format} =this.state
        const colorboxes = colors[level].map((color)=>(
            <Colorbox background={color[format]} name ={color.name} key={color.id} id={color.id} paletteId={id} moreurl={`/palette/${id}/${color.id}`} showLink={true}/>
        ))
        return(
            <div className="paletter">
             <Navbar handlechange={this.changeFormet}level={level} showingall changelevel={this.changelevel}/>   
                
                {/* navbar */}
                <div className="paletter-colors">
                {/* bunch of  color boxes */}
                {colorboxes}
                </div>
                {/* footer */}
                <Footer paletteName={paletteName} emoji={emoji}/>
            </div>
        )
        
    }
}

export default Palette