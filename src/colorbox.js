import React,{Component} from "react"
import './colorbox.css'

class Colorbox extends Component{
    render(){
        const {name,background} = this.props
        return(
            <div style={{background: background}} className= 'colorbox'>
                <div className="copy-container">
                <div className="box-content">
                    <span>{name}</span>
                </div>
                <button className="copy-button">copy</button>
            </div>
            <span className="see-more">more</span>
            </div>
                
        )
    }
}

export default Colorbox