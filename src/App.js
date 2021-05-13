import React,{Component} from 'react'
import Palette from './palette'
import seed from './seed'
import './App.css';
import PaletteList from './palettelist'
import {generatePalette} from './colorhelper'
import {Route, Switch} from 'react-router-dom'
import Single from "./singlepalette"

// new form
import Newpalette from './newpaletteform'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {palettes: seed}
    this.savePalette=this.savePalette.bind(this)
    this.findPallette=this.findPallette.bind(this)
  }
  findPallette(id) {
    return this.state.palettes.find(function(palette){
      return palette.id === id;
    });
  }
  savePalette(newpalette){
    this.setState({palettes:[...this.state.palettes, newpalette]})
  }
  render(){  
  return (
    <Switch>
    <Route exact path="/" render={(routeProps)=><PaletteList palette={this.state.palettes} {...routeProps}/>}/>
    <Route exact path="/palette/new" render={(routeProps)=><Newpalette {...routeProps} palettes={this.state.palettes} savePalette={this.savePalette}/>}/>
    <Route exact path="/palette/:id" render={(routeProps)=><Palette Palette={generatePalette(this.findPallette(routeProps.match.params.id))}/>}/>
    <Route exact path="/palette/:paletteId/:colorId" render={(routeProps)=><Single colorid={routeProps.match.params.colorId}Palette={generatePalette(this.findPallette(routeProps.match.params.paletteId))}/>}/>
 
    </Switch>
    
    // <div className="App">
    //   <Palette Palette={generatePalette(seed[4])}/>
    // </div>
  );
  }
}

export default App;

// import React,{Component} from "react"

// class Colorbox extends Component{
//   render(){
//       return(
//           <div>

//           </div>
//       )
//   }
// }

// export default Colorbox 