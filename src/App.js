import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/heading.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login.js';
import Signup  from './components/signup.js';
import Footer from './components/footer.js';
import { Container,Row,Col, Button,Alert,Breadcrumb,Card, FormLabel, Form } from 'react-bootstrap'; 
import image6 from "./components/images/nat1.jpg";
import image7 from "./components/images/nat2.jpg";
import image8 from "./components/images/nat3.jpg";
import image9 from "./components/images/nat10.jpg";
import image10 from "./components/images/nat5.jpg";
import image11 from "./components/images/nat6.jpg";
import image12 from "./components/images/nat7.jpg";
import image13 from "./components/images/nat8.jpg";
import image14 from "./components/images/nat11.jpg";


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Container>
        <Login />
        <Header />
<br/> <br/><br/><br/><br/><br/><br/>
<div>
<select name="dropdown" className="options">
    <option value="Popular">Popular</option>
    <option value="New & NoteWorthy">New & NoteWorthy</option>
    <option value="goods for sale">goods for sale</option>
  </select>
</div>
<div class="newmenu">
  <a class="newmenus" href="#insp">Inspiration</a>
  <a href="#ALL">All</a>
  <a href="#AN">Animation</a>
  <a href="#BR">Branding</a>
  <a href="#Ill">Illustrations</a>
  <a href="#MB">Mobile</a>
  <a href="#PR">Print</a>
  <a href="#PD">Product Design</a>
  <a href="#Ty">Typography</a>
  <a href="#WD">Web Design</a>
</div>
<br/>
<br/>
<div className="box">
<div class="row">
  <div class="column">
    <img src={image6} alt="nat1"/>
  </div>
  <div class="column">
    <img src={image7} alt="nat2"/>
  </div>
  <div class="column">
    <img src={image8} alt="nat3"/>
  </div>
  <br/>
  <div class="column">
    <img src={image9} alt="nat4"/>
  </div>
  <div class="column">
    <img src={image10} alt="nat5"/>
  </div>
  <div class="column">
    <img src={image11} alt="nat6"/>
  </div>
  <br/>
  <div class="column">
    <img src={image12} alt="nat7"/>
  </div>
  <div class="column">
    <img src={image13} alt="nat8"/>
  </div>
  <div class="column">
    <img src={image14} alt="nat9"/>
    </div>  
</div>
</div>

<br/><br/>
<Signup />
<Footer />
      </Container>
      
       
      </header>
    </div>
  );
}

export default App;
