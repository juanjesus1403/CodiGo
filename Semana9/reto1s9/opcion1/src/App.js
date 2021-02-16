import React from 'react'

import Header from './components/Header'
import Sidenav1 from './components/Sidenav1'
import Maincontent from './components/Maincontent'
import Sidenav2 from './components/Sidenav2'
import Footer from './components/Footer'


import "./components/Estilos.css"


export default function App() {



  return (
    <div>
    <header>
      <div class="container text-center contenedor1 mt-2 ">
        <div class="row">
          <div class="col-xl-12" >
            <Header/>
          </div>
        </div>
      </div>
      
    </header>
    <main>
      <div class = "container text-center mt-2 ">
        <div class = "row">
          <div class = "col sidenav me-2" >
            <Sidenav1/>
          </div>
          <div class="col-7"  style ={{backgroundColor:'purple'}}>
            <Maincontent/>
          </div>
          <div class= "col" style ={{backgroundColor:'skyblue'}}>
            <Sidenav2/>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="container text-center footer1 mt-2">
        <div class="row">
          <div class="col-12" >
            <Footer/>
          </div>
        </div>
      </div>
    </footer>

    </div>
  )
}
