import React,{Component} from "react"
import MiniPalette from './minipalette'
import {withStyles} from "@material-ui/styles"
import styles from './styles/palettelist'

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