import React from "react"
import "./Header.css"
import { useEffect } from "react"

import ava from "../assets/1fin_kl.jpg"

export const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nameEl = document.getElementById("name")
      const h3El = document.getElementById("surname")
      const titleEl = document.getElementById("title")

      if (window.scrollY !== 0) {
        nameEl.classList.add("stickyname")
        h3El.classList.add("stickysurname")
        titleEl.classList.add("stickytitle")

        document.getElementById("firstname").style.fontSize = "1.5em"
        document.getElementById("firstname").style.fontWeight = document.body.clientWidth < 450 && "500"
        document.getElementById("firstname").style.letterSpacing = document.body.clientWidth < 450 && "5px"
      }

      if (window.scrollY === 0) {
        nameEl.classList.remove("stickyname")
        h3El.classList.remove("stickysurname")
        titleEl.classList.remove("stickytitle")

        document.getElementById("firstname").style.fontSize = document.body.clientWidth > 450 ? "7em" : "2.8em"
        document.getElementById("firstname").style.fontWeight = document.body.clientWidth < 450 && "200"
        document.getElementById("firstname").style.letterSpacing = document.body.clientWidth < 450 && "10px"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="header" id="header">
      <div className="contacts" id="contacts">
        <a href="mailto:fleischmann@mail.com">
          <ion-icon name="mail"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/in/sabine-fleischmann/" alt="Linkedin Link" target="_blank" rel="noreferrer">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="https://github.com/l3x-fx/" alt="GitHub Link" target="_blank" rel="noreferrer">
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
      <div className="title" id="title">
        <p>Web Developer</p>
      </div>

      <div className="name" id="name">
        <h1 id="firstname">SABINE</h1>
        <h3 className="surname" id="surname">
          FLEISCHMANN
        </h3>
      </div>
    </div>
  )
}
