import React from "react"
import ava from "../assets/ava.png"

export const About = () => {
  return (
    <div className="wrapper">
      <div className="img">
        <img className="ava" src={ava}></img>
      </div>
      <h1>Sabine Fleischmann </h1>
      <p className="title">Web Deveoper</p>

      <div className="contacts">
        <a href="https://www.linkedin.com/in/sabine-fleischmann-463a20236/">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/sabine-fleischmann-463a20236/">Instaffo</a>
        <a href="https://github.com/l3x-fx/">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </div>
  )
}
