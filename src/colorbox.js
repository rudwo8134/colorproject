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
    },
    boxContent:{
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color:"black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
    },
    copyOverlay:{
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)",

    },
    showoverlay:{
        opacity: "1",
        transform: "scale(50)",
        zIndex:"10",
        position: "absolute",
    },
    copyMessage:{
        position: "fixed",
        left:"0",
        top:"0",
        right: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h1":{
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgb(255,255,255,0.2)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0px",
            padding:"1rem",
            textTransform: "uppercase",
        },
        "& p":{
            fontSize: "2rem",
            fontWeight: "100"
        }
    },
    copymassageshow:{
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s",
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
                <div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showoverlay}`}/>
                <div className={`${classes.copyMessage} ${copied && classes.copymassageshow}`}>
                    <h1>Copied👍</h1>
                    <p className={classes.copytext}>Code: {background}</p>
                </div>
                <div className="copy-container">
                    <div className={classes.boxContent}>
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