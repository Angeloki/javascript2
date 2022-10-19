import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import {Component} from "react";
import Goodbye from "./components/Goodbye"
import { Kittys } from './components/Goodbye';
import Message from "./components/Message"
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import Greetings from './components/Greetings';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';




/*function App() {
  return (
    <div className="App">
      <Message/>
      <Greet/>
      <Welcome/>
    </div>
  );
}*/

class App extends Component{
  render(){
    return(
      <div className ="App">
         <BrowserRouter>
          <Routes>
            <Route path="/" element= {<Layout/>}>
              <Route index element= {<Home/>}/>
              <Route path= "about" element={<About/>}/>

            </Route>
          </Routes>
         </BrowserRouter>
       
        {/*<Message/>
        <Table/>
        <Stylesheet main ={true}/>
        <NameList/>
         <UserGreeting/>
        <ParentComponent/>
        <Greetings/>
        <EventBind/>
        <Counter/>
        <Greet name = "Angelica" heroName="Momma">
          <p>Loki is my baby dog.</p>
        </Greet>
        <Greet name= "Kevin" heroName= "Sonic Cat">
          <p>This cat meows alot!</p>
        </Greet>
        <Greet name = "Loki" heroName= "Baby"/>
        <Welcome name = "Jasper" heroName= "Needy Kitty"/>
        <Kittys/>
    <Goodbye/>*/}
      </div>

    )
  }
}

export default App;
