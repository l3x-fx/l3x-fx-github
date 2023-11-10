import React from "react"
import "./App.css"
import { Navbar } from "./app/Navbar"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
