import React from "react"
import "./project.css"

export const Projects = () => {
  return (
    <div className="projects">
      <div className="projcard">
        <div className="ctitle">
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
          <div className="det">
            <a className="repo" href="https://github.com/l3x-fx/MyStoreApp">
              <ion-icon name="logo-github"></ion-icon> Frontend
            </a>
            <p className="tech">Angular | NgRx </p>
          </div>

          <div className="det">
            <a className="repo" href="https://github.com/l3x-fx/Storefront_Backend_Project">
              <ion-icon name="logo-github"></ion-icon> Backend
            </a>
            <p className="tech">Node.JS | Express </p>
          </div>
        </div>
        <div className="descr">
          <p>A showcase Fullstack Project with a fully functional (fake) webshop</p>
        </div>
      </div>

      {/* SPOTIFY */}
      <div className="projcard">
        <div className="ctitle">
          <p className="cardtitle">Spotify Jamming</p>
          <p className="cartsubtitle">Frontend Project</p>
        </div>
        <div className="live">
          <a href="https://enchanting-narwhal-efd2fb.netlify.app/">
            <ion-icon name="play-circle"></ion-icon>
            <p className="liveon">LIVE ON NETLIFY</p>
          </a>
        </div>

        <div className="details">
          <div className="det">
            <a className="repo" href="https://github.com/l3x-fx/SpotifyJamming">
              <ion-icon name="logo-github"></ion-icon> Frontend
            </a>
            <p className="tech">React | Javascript </p>
          </div>
        </div>
        <div className="descr">
          <p>Conntect with Spotify API to search songs and artists to create your own Jamming Playlist. </p>
        </div>
      </div>

      {/* WOULD YOU RATHER? */}
      <div className="projcard">
        <div className="ctitle">
          <p className="cardtitle">Would You Rather?</p>
          <p className="cartsubtitle">Frontned Project</p>
        </div>
        <div className="live">
          <a href="https://sensational-mandazi-44869f.netlify.app/">
            <ion-icon name="play-circle"></ion-icon>
            <p className="liveon">LIVE ON NETLIFY</p>
          </a>
        </div>

        <div className="details">
          <div className="det">
            <a className="repo" href="https://github.com/l3x-fx/WouldYouRather">
              <ion-icon name="logo-github"></ion-icon> Frontend
            </a>
            <p className="tech">React | Redux | Javascript </p>
          </div>
        </div>
        <div className="descr">
          <p>This you lets you create and vote on polls as well as analyse the user engagement. </p>
        </div>
      </div>

      {/* MAKE IT HAPPEN */}
      <div className="projcard">
        <div className="ctitle">
          <p className="cardtitle">Make It Happen</p>
          <p className="cartsubtitle">Mobile Project</p>
        </div>
        <div className="live">
          <a href="https://snack.expo.dev/@l3x-fx/makeithappen">
            <ion-icon name="play-circle"></ion-icon>
            <p className="liveon">LIVE ON EXPO SNACK</p>
          </a>
        </div>

        <div className="details">
          <div className="det">
            <a className="repo" href="https://github.com/l3x-fx/MakeItHappen">
              <ion-icon name="logo-github"></ion-icon> Frontend
            </a>
            <p className="tech">React Native | Redux | Javascript</p>
          </div>
        </div>
        <div className="descr">
          <p>A simple, calendar-based ToDo management app.</p>
        </div>
      </div>
    </div>
  )
}
