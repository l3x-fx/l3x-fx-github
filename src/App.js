import React from "react"
import { useEffect, useState } from "react"
import { Provider } from "react-redux"
import store from "./app/store"

import "./App.css"

import { Projects } from "./app/features/Projects"
import { Header } from "./app/Header"

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Provider store={store}>
      <div className="App" style={{ backgroundPositionY: scrollPosition * 0.3 + "px" }}>
        <Header />
        <Projects />
        <div className="about">
          <p>© by Sabine Fleischmann</p>

          <div className="footer-contacts">
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
        </div>
      </div>
    </Provider>
  )
}

export default App
