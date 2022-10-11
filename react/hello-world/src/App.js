import logo from './logo.svg';
import './App.css';
import {Greet, Hello} from "./components/Greet";
import Welcome from "./components/Welcome";
import {Component} from "react";
import Goodbye from "./components/Goodbye"
import { Kittys } from './components/Goodbye';



/*function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
    </div>
  );
}*/

class App extends Component{
  render(){
    return(
      <div className ="App">
        <Greet/>
        <Welcome/>
        <Hello/>
        <Kittys/>
        <Goodbye/>
      </div>

    )
  }
}

export default App;
