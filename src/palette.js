import React,{Component} from 'react'
import Colorbox from './colorbox'
import Navbar from './navbar'
import './palette.css';



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
        const {colors} =this.props.Palette
        const {level,format} =this.state
        const colorboxes = colors[level].map((color)=>(
            <Colorbox background={color[format]} name ={color.name} />
        ))
        return(
            <div className="paletter">
             <Navbar handlechange={this.changeFormet}level={level} changelevel={this.changelevel}/>   
                
                {/* navbar */}
                <div className="paletter-colors">
                {/* bunch of  color boxes */}
                {colorboxes}
                </div>
                {/* footer */}
            </div>
        )
        
    }
}

export default Palette