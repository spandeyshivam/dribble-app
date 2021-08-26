import React from 'react';
import image1 from "./images/insta.png";
import image2 from "./images/tweet.jpg";
import image5 from "./images/Screenshot 2021-08-26 014323.png";


function Footer(){
return(
    <div>
  <footer>
    <img src={image5} 
    height="50" 
    width="55" 
    className="footimg"
    />
    <br/> 
    <br/>
    <h4 className="foot">Dribbble is the world’s leading<br/>community for creatives to share, grow,<br/>and get hired.</h4>
    <br/>
    <br/>
    <br/>
    <p>
      <img 
      src={image1}
      height="20" 
      width="25" 
      className="insta"/>
      <span>
        < img 
        src={image2} 
        height="20" 
        width="25"
        className="twitter"/>
        </span>
        </p>
  </footer>
</div>

)
}

export default Footer;