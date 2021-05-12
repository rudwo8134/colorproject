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
  findPallette(id) {
    return seed.find(function(palette){
      return palette.id === id;
    });
  }
  render(){  
  return (
    <Switch>
    <Route exact path="/" render={(routeProps)=><PaletteList palette={seed} {...routeProps}/>}/>
    <Route exact path="/palette/new" render={()=><Newpalette/>}/>
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