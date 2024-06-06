import React, { useState } from "react"
import { useSelector } from "react-redux"
import { selectProjects } from "./projectsSlice"

import "./projects.css"
import { ProjectCard } from "./ProjectCard"

export const Projects = () => {
  const projects = useSelector(selectProjects)

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  )
}
