import React from 'react';
import image3 from "C:/Users/HI/newapp/src/images/Capture.JPG"
import image4 from "C:/Users/HI/newapp/src/images/Capture2.JPG"
function Login(){
return(
        <div class="shivmenu">
            <img src={image3} 
            height="50" 
            width="50"
            className="dribble"/>
  <a class="menus" href="#insp">Inspiration</a>
  <a href="#fW">Find Work</a>
  <a href="#LD">Learn Design</a>
  <a href="#GP">Go Pro</a>
  <a href="#HD">Hire Designers</a>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" class="icon icon-18 fill-current">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"></path>
</svg>
<img src={image4} 
height="20" 
width="20"
className="imag4"/>
<label className="signin">Sign In</label>
</div>
)}

export default Login;