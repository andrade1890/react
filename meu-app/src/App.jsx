import React, { Fragment, useState } from "react"

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Curriculo from "./components/Header/Curriculo/Curriculo";
import Portfolio from "./components/Portfolio/Portfolio";


function App() {
  return (
    <>
   <Header></Header> 

   <nav>
    <ul>
      <li className="button"><a href="#">curriculo</a></li>
      <li className="button"><a href="pages/portfolio.html">portfolio</a></li>
      <li className="button"><a href="pages/contato.html">contato</a></li>
    </ul>
   </nav>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<layout/>}>
        <Route index element={<Home/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="contact" element={<contact/>}/>
        <Route path="*" element={<NoPage/>}/>
        </Route>
     </Routes>
    </BrowserRouter>


   <Curriculo></Curriculo>

   <Portfolio></Portfolio>

  <Footer></Footer>

   </>

  )
}

export default App;
