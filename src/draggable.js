
import React,{Component} from "react"
import {withStyles} from '@material-ui/styles'
import DeleteIcon from '@material-ui/icons/Delete';
import {SortableElement} from 'react-sortable-hoc'

const style ={
    root:{
        width:"20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover svg":{
            color: "white",
            transform: "scale(1.5)"
        }
    },
    boxcontent:{
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color:"black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    icon:{
        transition: "all 0.3s ease-in-out",
        color: "rgba(0,0,0,0.5)"
    }
}

const Draggable = SortableElement(props=> {
      return(
          <div className={props.classes.root} style={{backgroundColor:props.color}}>
              <div className={props.classes.boxcontent}>
                  <span>{props.name}</span>
                  <DeleteIcon className={props.classes.icon} onClick={props.handleclick}/>
              </div>
              
          </div>
      ) 
})

export default  withStyles(style)(Draggable)