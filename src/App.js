import logo from './logo.svg';
import './App.css';
import React from 'react';
import Shiv1 from './component/drib'
import 'bootstrap/dist/css/bootstrap.min.css'



import { Container, Row, Col, Button, Alert, Breadcrumb, Card, FormLabel, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <img src="Capture" height="50" width="50" className="dribble" />
          <div class="shivmenu">
            <a class="menus" href="#insp">Inspiration</a>
            <a href="#fW">Find Work</a>
            <a href="#LD">Learn Design</a>
            <a href="#GP">Go Pro</a>
            <a href="#HD">Hire Designers</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon icon-18 fill-current">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path>
            </svg>
            <img src="Capture2.jpg" height="20" width="20" />
            <label className="signin">Sign In</label>
          </div>
          <div className="content">
            <h1 className="content">Discover the world’s top designers & creatives.</h1>
            <br />
            <h2 className="newcontent">Dribbble is the leading destination to find & showcase creative work and home to the world's best design <br />professionals.</h2>
            <img src="romainbriaux-640w-51a20c877f4deef57fbbb82609ae6d846bcd4129f21e21505371255abb3f2f60.webp" height="250" width="270" className="shivimg" />
          </div>
          <br /> <br /><br /><br /><br /><br /><br />
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

          </div>
          <br />
          <br />
          <br />
          <div className="box">
            <div class="row">
              <div class="column">
                <img src="images1.jpg" alt="roger" />
              </div>
              <div class="column">
                <img src="images2.jpg" alt="roger2" />
              </div>
              <div class="column">
                <img src="images3.jpg" alt="roger3" />
              </div>
              <br />
              <div class="column">
                <img src="federer-reuters-fourth-round.jpg" alt="roger4" />
              </div>
              <div class="column">
                <img src="federer-reuters-fourth-round.jpg" alt="roger5" />
              </div>
              <div class="column">
                <img src="Federer.jpg" alt="roger6" />
              </div>
              <br />
              <div class="column">
                <img src="roger-federer-fb.jpg" alt="roger7" />
              </div>
              <div class="column">
                <img src="Roger-Federer-Wimbledon-2021.webp" alt="roger8" />
              </div>
              <div class="column">
                <img src="merlin_188806203_00eef947-70cd-4de1-b32d-a3d1afbaf240-mediumSquareAt3X.jpg" alt="roger9" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br/>
          <div>
            <p><button class="button1">Sign up to continue</button><span> sign in </span></p>
          </div>
          <div>
            <footer>
              <img src="Capture.jpg" height="50" width="55" className="footimg" />
              <br />
              <h4 className="foot">Dribbble is the world’s leading<br />community for creatives to share, grow,<br />and get hired.</h4>
              <br /><br />
              <p><img src="1025px-Instagram-Icon.png" height="20" width="25" className="insta" /><span><    img src="10wmt-superJumbo-v4.jpg" height="20" width="25" className="twitter" /></span></p>
            </footer>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;