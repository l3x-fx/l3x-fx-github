import React, { useState, useRef, useEffect } from "react"
import "./projectcard.css"

export const ProjectCard = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const checkVisibility = () => {
      if (cardRef.current) {
        const { top } = cardRef.current.getBoundingClientRect()
        const halfWindowHeight = window.innerHeight * 0.8
        if (top <= halfWindowHeight && isVisible === false) {
          setIsVisible(true)
        }
        if (window.scrollY === 0 && isVisible) {
          setIsVisible(false)
        }
      }
    }

    const scrollHandler = () => {
      checkVisibility()
    }

    checkVisibility() // Check initial visibility
    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [isVisible])
  return (
    <div
      className="projcard"
      style={{ visibility: isVisible ? "visible" : "hidden", opacity: isVisible ? 1 : 0 }}
      ref={cardRef}
    >
      {/* Screenshot */}
      <div className="screenshot">
        <a href={project.liveLink}>
          <img
            src={project.screenshot}
            alt="Screenshot of Webapp"
            {...(project.mobile && { style: { width: "30%" } })}
          />
        </a>
      </div>
      {/* Infos */}
      <div className="card">
        {/* Title */}

        <div className="titles">
          <a href={project.liveLink}>
            <h2 className="cardtitle">{project.title}</h2>
          </a>
          <p className="cartsubtitle">{project.type}</p>
        </div>

        {/* Description */}
        <div className="descr">{project.description}</div>

        {/* Live Link */}
        <div className="links">
          <a href={project.liveLink}>
            <ion-icon name="play-circle"></ion-icon>
            <p className="liveon">LIVE</p>
          </a>
          <a href={project.FERepoLink}>
            <ion-icon name="logo-github"></ion-icon>
            <p>FRONTEND Code</p>
          </a>

          <a href={project.BERepoLink}>
            <ion-icon name="logo-github"></ion-icon>
            <p>BACKEND Code</p>
          </a>
        </div>

        {/* Tech Stack */}
        <div className="techs">
          {project.techStack.map((tech, index) => (
            <p key={tech} className="tech">
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
