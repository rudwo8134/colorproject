import React,{Component} from "react"
import './colorbox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import chroma from 'chroma-js'
import {withStyles} from "@material-ui/styles"


const style ={
    colorbox:{
        width:"20%",
        height: props => (props.showingFull ? "25%": "50%"),
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover Button":{
            opacity: "1",
            transition: "0.5s"
        }
    },
    copytext:{
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
    },
    colorname:{
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    seeMore:{
        background: "rgb(255,255,255,0.3)",
        position: "absolute",
        border: "none",
        right:"0px",
        bottom: "0px",
        color:  props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton:{
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top:"50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "5px",
        textAlign: "center",
        outline: "none",
        background: "rgb(255,255,255,0.3)",
        fontSize: "1rem",
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.6)" : "white",
        textEmphasis: "none",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity:"0"
    }
}

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
        const {name,background, paletteId,id,moreurl,showingFull, classes} = this.props
        const {copied} = this.state
        return(
            <CopyToClipboard text={background} onCopy={this.changestate}>
            <div style={{background: background}} className={classes.colorbox}>
                <div style={{background}} className={`copy-overlay ${copied && "show"}`}/>
                <div className={`copy-message ${copied && "show"}`}>
                    <h1>Copied👍</h1>
                    <p className={classes.copytext}>Code: {background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={classes.colorname}>
                            {name}
                        </span>
                    </div>
                        <button className={classes.copyButton}>
                            copy
                        </button>
                </div>
            {showingFull &&(
            <Link to={moreurl} onClick={e=> e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
            </Link>    
            )}
            </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(style)(Colorbox);