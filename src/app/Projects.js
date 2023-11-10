import React from "react"
import "./project.css"

export const Projects = () => {
  return (
    <div>
      <h2>PROJECTS</h2>
      <div className="proj">
        <div className="projcard">
          <div className="title">
            {/* MYSTORE */}
            <p className="cardtitle">MyStore</p>
            <p className="cartsubtitle">Fullstack Project</p>
          </div>
          <div className="live">
            <a href="https://lively-bush-066e13b03.4.azurestaticapps.net/">
              <ion-icon name="play-circle"></ion-icon>
              <p className="liveon">LIVE ON AZURE</p>
            </a>
          </div>
          <div className="details">
            <a className="repo" href="https://github.com/l3x-fx/MyStore">
              <ion-icon name="link-outline"></ion-icon> Frontend Repository
            </a>
            <p className="tech">Angular | NgRx </p>
            <a className="repo" href="https://github.com/l3x-fx/Storefront_Backend_Project">
              <ion-icon name="link-outline"></ion-icon> Backend Repository
            </a>
            <p className="tech">Node.JS | Express </p>
          </div>
        </div>

        {/* SPOTIFY */}
        <div className="projcard">
          <div className="title">
            <p className="cardtitle">Spotify Jamming</p>
            <p className="cartsubtitle">Frontend Project</p>
          </div>
          <div className="live">
            <a href="https://github.com/l3x-fx/SpotifyJamming">
              <ion-icon name="play-circle"></ion-icon>
              <p className="liveon">LIVE ON NETLIFY</p>
            </a>
          </div>

          <div className="details">
            <a className="repo" href="https://github.com/l3x-fx/SpotifyJamming">
              <ion-icon name="link-outline"></ion-icon> Frontend Repository
            </a>
            <p className="tech">React | Redux | Javascript </p>
          </div>
        </div>

        {/* APP APP */}
        <div className="projcard">
          <div className="title">
            <p className="cardtitle">Appointment App</p>
            <p className="cartsubtitle">Fullstack Project</p>
          </div>
          <div className="live">
            <a href="https://github.com/l3x-fx/Appointment-Planner">
              <ion-icon name="play-circle"></ion-icon>
              <p className="liveon">LIVE ON NETLIFY</p>
            </a>
          </div>

          <div className="details">
            <a className="repo" href="https://github.com/l3x-fx/Appointment-Planner">
              <ion-icon name="link-outline"></ion-icon> Frontend Repository
            </a>
            <p className="tech">React | Redux | Javascript </p>
          </div>
        </div>

        {/* WOULD YOU RATHER? */}
        <div className="projcard">
          <div className="title">
            <p className="cardtitle">Would You Rather?</p>
            <p className="cartsubtitle">Frontned Project</p>
          </div>
          <div className="live">
            <a href="https://github.com/l3x-fx/WouldYouRather">
              <ion-icon name="play-circle"></ion-icon>
              <p className="liveon">LIVE ON NETLIFY</p>
            </a>
          </div>

          <div className="details">
            <a className="repo" href="https://github.com/l3x-fx/WouldYouRather">
              <ion-icon name="link-outline"></ion-icon> Frontend Repository
            </a>
            <p className="tech">React | Redux | Javascript </p>
          </div>
        </div>

        {/* MAKE IT HAPPEN */}
        <div className="projcard">
          <div className="title">
            <p className="cardtitle">Make It Happen</p>
            <p className="cartsubtitle">Fullstack Project</p>
          </div>
          <div className="live">
            <a href="https://snack.expo.dev/@l3x-fx/makeithappen">
              <ion-icon name="play-circle"></ion-icon>
              <p className="liveon">LIVE ON EXPO SNACK</p>
            </a>
          </div>

          <div className="details">
            <a className="repo" href="https://github.com/l3x-fx/MakeItHappen">
              <ion-icon name="link-outline"></ion-icon> Frontend Repository
            </a>
            <p className="tech">React Native | Redux | Javascript</p>
          </div>
        </div>
      </div>
    </div>
  )
}
