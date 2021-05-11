import React,{Component} from 'react'
import Colorbox from './colorbox'
import './palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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
                <Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={this.changelevel}/>
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