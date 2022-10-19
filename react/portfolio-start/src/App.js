import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About"
import Project from "./components/Projects"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= "/" element ={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path = "about" element= {<About/>}/>
            <Route path = "projects" element= {<Project/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
