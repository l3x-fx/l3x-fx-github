import React from "react"
import "./Header.css"
import ava from "../assets/3fin.jpg"

export const Header = () => {
  return (
    <div className="headerWrap">
      <div className="img">
        <img className="ava" src={ava} alt=""></img>
      </div>

      <div className="name">
        <h2>Sabine Fleischmann</h2>
      </div>
      <div className="black">
        <div>
          <p className="title">Web Deveolper</p>
        </div>

        <div className="contacts">
          <a href="mailto:fleischmann@mail.com">
            <ion-icon name="mail"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/sabine-fleischmann/"
            alt="Linkedin Link"
            target="_blank"
            rel="noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://github.com/l3x-fx/" alt="GitHub Link" target="_blank" rel="noreferrer">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>

        {/* --- */}
      </div>
    </div>
  )
}
