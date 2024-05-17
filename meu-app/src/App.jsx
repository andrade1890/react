import React from "react"

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Curriculo from "./components/Curriculo/Curriculo";
import Portfolio from "./components/Portfolio/Portfolio";
import Contato from "./components/Contato/Contato";

import {BrowserRouter,Route,Link,Routes} from "react-router-dom"

function App() {
  return (
    <>
   <Header></Header> 

    <BrowserRouter>

 <nav>
    <ul>
      <li className="button"><Link to="/">Curriculo</Link></li>
      <li className="button"><Link to="/Portfolio">Portfolio</Link></li>
      <li className="button"><Link to="/Contato">Contato</Link></li> 
    </ul>
  </nav>

    <Routes>
        <Route index element={<Curriculo/>}/>
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Contato" element={<Contato />} />
    </Routes>
  
    </BrowserRouter>

 <Footer></Footer>

  </>
  )
}

export default App;
