import React,{Component} from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'
import style from './styles/colorboxstyle'
import {withStyles} from "@material-ui/styles"




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
        const {name,background,moreurl,showingFull, classes} = this.props
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