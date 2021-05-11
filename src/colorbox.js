import React,{Component} from "react"
import './colorbox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'

class Colorbox extends Component{
    render(){
        const {name,background} = this.props
        return(
            <CopyToClipboard text={background}>
            <div style={{background: background}} className= 'colorbox'>
                <div className="copy-container">
                    <div className="box-content">
                        <span>
                            {name}
                        </span>
                    </div>
                        <button className="copy-button">
                            copy
                        </button>
                </div>
            <span className="see-more">more</span>
            </div>
            </CopyToClipboard>
        )
    }
}

export default Colorbox