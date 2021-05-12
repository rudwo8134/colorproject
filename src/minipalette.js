import React from 'react'
import {withStyles} from "@material-ui/styles"
import styles from './styles/minipalette'


function MiniPalette(props){
    const {classes,paletteName,emoji,colors} = props;
    const minicolor = colors.map(c =>(
        <div className={classes.mini} style={{backgroundColor:c.color}} key={c.name}></div>
    ))
    return(
        
        <div className={classes.root} onClick={props.gotopal}>
            <div className={classes.colors}>
                {minicolor}
            </div>
    <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);