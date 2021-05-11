import React,{Component} from 'react'
import Palette from './palette'
import seed from './seed'
import './App.css';
import {generatePalette} from './colorhelper'

function App() {
  return (
    <div className="App">
      <Palette Palette={generatePalette(seed[4])}/>
    </div>
  );
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