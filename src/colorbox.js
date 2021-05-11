import React,{Component} from "react"
import './colorbox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'

class Colorbox extends Component{
    constructor(props){
        super(props);
        this.state = {copied: false}
        this.changestate= this.changestate.bind(this)
    }
    changestate(){
        this.setState({copied:true}, ()=>{
            setTimeout(()=>this.setState({copied:false}), 1500);
        })
    }
    render(){
        const {name,background} = this.props
        const {copied} = this.state
        return(
            <CopyToClipboard text={background} onCopy={this.changestate}>
            <div style={{background: background}} className= 'colorbox'>
                <div style={{background}} className={`copy-overlay ${copied && "show"}`}/>
                <div className={`copy-message ${copied && "show"}`}>
                    <h1>Copied👍</h1>
                    <p>Code: {background}</p>
                </div>
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