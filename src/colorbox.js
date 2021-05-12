import React,{Component} from "react"
import './colorbox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import chroma from 'chroma-js'

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
        const {name,background, paletteId,id,moreurl,showLink} = this.props
        const {copied} = this.state
        const isdark = chroma(background).luminance() <= 0.08;
        const islight = chroma(background).luminance() >= 0.5;
        return(
            <CopyToClipboard text={background} onCopy={this.changestate}>
            <div style={{background: background}} className= 'colorbox'>
                <div style={{background}} className={`copy-overlay ${copied && "show"}`}/>
                <div className={`copy-message ${copied && "show"}`}>
                    <h1>Copied👍</h1>
                    <p className={islight && 'dark-text1'}>Code: {background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={isdark && "light-text"}>
                            {name}
                        </span>
                    </div>
                        <button className={`copy-button ${islight && 'dark-text1'}`}>
                            copy
                        </button>
                </div>
            {showLink &&(
            <Link to={moreurl} onClick={e=> e.stopPropagation()}>
            <span className={`see-more ${islight && 'dark-text'}`}>MORE</span>
            </Link>    
            )}
            </div>
            </CopyToClipboard>
        )
    }
}

export default Colorbox