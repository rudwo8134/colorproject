import React,{Component} from 'react'
import Palette from './palette'
import seed from './seed'
import './App.css';
import {generatePalette} from './colorhelper'
import {Route, Switch} from 'react-router-dom'
class App extends Component {
  findPallette(id) {
    return seed.find(function(palette){
      return palette.id === id;
    });
  }
  render(){  
  return (
    <Switch>
    <Route exact path="/" render={()=><h1>Pallet list gonna be here</h1>}/>
    <Route exact path="/palette/:id" render={(routeProps)=><Palette Palette={generatePalette(this.findPallette(routeProps.match.params.id))}/>}/>
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