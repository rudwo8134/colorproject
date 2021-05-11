import React,{Component} from 'react'
import Colorbox from './colorbox'
import 'rc-slider/assets/index.css';
import './palette.css';
import Slider from 'rc-slider';


class Palette extends Component{
    constructor(props){
        super(props);
        this.state= {level:500}
        this.changelevel=this.changelevel.bind(this)
    }
    changelevel(newlevel){
        this.setState({level:newlevel})
    }
    render(){
        const {colors} =this.props.Palette
        const {level} =this.state
        const colorboxes = colors[level].map((color)=>(
            <Colorbox background={color.hex} name ={color.name} />
        ))
        return(
            <div className="paletter">
                <div className="slider">
                <Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={this.changelevel}/>
                </div>
                
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