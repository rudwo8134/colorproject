import React,{Component} from "react"
import {Link} from 'react-router-dom'
import MiniPalette from './minipalette'
import {withStyles} from "@material-ui/styles"

const styles = {
    root:{
        backgroundColor:"blue",
        height:"100vh",
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center"
    },
    container:{
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    nav:{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"

    },
    palettes:{
        boxSizing: "border-box",
        width:"100%",
        display: "grid",
        gridTemplateColumns:"repeat(3,30%)",
        gridGap:"5%"
    }
}

class palettelist extends Component{
    gotopal(id){
        this.props.history.push(`/palette/${id}`)
    }
  render(){
      const {palette, classes} = this.props
      return(
          <div className={classes.root}>
              <div className={classes.container}>
                  <nav className={classes.nav}>
                    <h1>Eric's Colors</h1>
                  </nav>
                  <div className={classes.palettes}>
                    {palette.map(pa=>(
                        <MiniPalette {...pa} gotopal={()=>this.gotopal(pa.id)}/>
                    ))}
                  </div>
              </div>
          </div>
      )
  }
}

export default withStyles(styles)(palettelist) 