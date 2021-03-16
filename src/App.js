import './Style.css'
import React from "react";
import "./App.css" 
import Abir from './imageInSrc.jpg'

function Checkpoint () {
  return (
<div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Abir Ben Said</h1>
    <br />
    <img src={Abir} alt="Abir" />
    <br />
    <img src="./imageInPublic.jpeg" alt="abir"/>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>
)
  }
  export default Checkpoint