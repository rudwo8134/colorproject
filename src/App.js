import React,{Component} from 'react'
import Palette from './palette'
import seed from './seed'
import './App.css';
import {generatePalette} from './colorhelper'

function App() {
  console.log(generatePalette(seed[4]))
  return (
    <div className="App">
      <Palette {...seed[6]}/>
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