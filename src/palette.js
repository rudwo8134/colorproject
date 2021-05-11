import React,{Component} from 'react'
import Colorbox from './colorbox'
import './palette.css'

class Palette extends Component{
    render(){
        const colorboxes = this.props.colors.map((color)=>(
            <Colorbox background={color.color} name ={color.name} />
        ))
        return(
            <div className="paletter">
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