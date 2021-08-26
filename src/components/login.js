import React from 'react';
import image25 from "./images/Capture.JPG";  
import image4 from "./images/Capture2.JPG";

function Login(){
return(
        <div class="shivmenu">
            <img src={image25} 
            height="50" 
            width="50"
            className="dribble" />

           
  <a class="menus" href="#insp">Inspiration</a>
  <a href="#fW">Find Work</a>
  <a href="#LD">Learn Design</a>
  <a href="#GP">Go Pro</a>
  <a href="#HD">Hire Designers</a>

<img src={image4} 
height="20" 
width="20"
className="imag4" />
<label className="signin">Sign In</label>
</div>
)}

export default Login;