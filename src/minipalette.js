import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete"
class MiniPalette extends PureComponent { 
    constructor(props){  
      super(props);
      this.removePalette=this.removePalette.bind(this)
      this.handleclick=this.handleclick.bind(this)
    }
    removePalette(e){
      e.stopPropagation();
      this.props.openDialog(this.props.id)

    } 
    handleclick(){
      this.props.gotopalette(this.props.id)
    }
    render(){
      const { classes, paletteName, emoji, colors} = this.props;
      const miniColorBoxes = colors.map(color => (
        <div
          className={classes.miniColor}
          style={{ backgroundColor: color.color }}
          key={color.name}
        />
      ));
  return (
    <div className={classes.root} onClick={this.handleclick}>
          <DeleteIcon className={classes.deleteIcon} style={{transition: "all 0.5s ease-in-out"}}
          onClick={this.removePalette}/>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
    }
}

export default withStyles(styles)(MiniPalette);
