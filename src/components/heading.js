import React from 'react';
import image from "C:/Users/HI/newapp/src/images/pic1.jpg";



function Header(){
    return(
        <div className="content">
            <h1 className="content">Discover the world’s top designers & creatives.</h1>  
            <br/>
            <h2 className="newcontent">Dribbble is the leading destination to find & showcase creative work<br/> and home to the world's best design professionals.</h2>
            <img 
            src={image} 
            alt="p1"
            height="150" 
            width="170"
            className="shivimg"
            />
        </div>
    );
}

export default Header;