
import React,{Component} from "react"

function PaletteFooter(props){
    const {paletteName,emoji} = props
      return(
            <footer className="paletter-footer">
                {paletteName}
                <span className="emoji">{emoji}</span>
            </footer>
      )
}

export default PaletteFooter