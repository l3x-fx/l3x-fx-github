// yes, its totally overengineered
// no, I don't care
// it was simply for practice ;-)
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  projects: [
    {
      id: 1,
      title: "MyStore",
      type: "Fullstack Project",
      description:
        "MyStore is a full-stack web application featuring a fully functional webshop. The frontend is built with Angular, using AngularMaterial for the UI and NgRx for state management. The backend utilizes Node.js and Express, with PostgreSQL for the database. Deployed on Azure and containerized with Docker, MyStore demonstrates modern web development practices and technologies.",
      liveLink: "https://lively-bush-066e13b03.4.azurestaticapps.net/",
      FERepoLink: "https://github.com/l3x-fx/MyStoreApp",
      BERepoLink: "https://github.com/user/project-one-backend",
      screenshot: "https://i.imgur.com/IMbx5yy.jpg",
      techStack: [
        "Angular",
        "AngularMaterial",
        "NgRx",
        "JavaScript",
        "Typescript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Azure",
        "Docker",
      ],
      mobile: false,
    },
    {
      id: 2,
      title: "Spotify Jamming",
      type: "Frontend Project",
      description:
        "Connect your Spotify account to explore a vast library of songs and artists. Use advanced search features to find your favorite tracks, discover new music, and curate personalized playlists. Save your playlists directly to your Spotify account for easy access and listening on any device.",
      liveLink: "https://enchanting-narwhal-efd2fb.netlify.app/",
      FERepoLink: "https://github.com/l3x-fx/SpotifyJamming",
      BERepoLink: "",
      screenshot: "https://i.imgur.com/K6cf6VO.jpg",
      techStack: ["React", "Javascript", "CSS", "HTML"],
      mobile: false,
    },
    {
      id: 3,
      title: "Would You Rather?",
      type: "Frontend Project",
      description:
        "This platform allows you to create engaging polls on a variety of topics, invite participants to vote, and analyze user engagement through detailed analytics. Gain insights into user preferences and trends, making it a powerful tool for gathering opinions and making informed decisions.",
      liveLink: "https://sensational-mandazi-44869f.netlify.app/",
      FERepoLink: "https://github.com/l3x-fx/WouldYouRather",
      BERepoLink: "",
      screenshot: "https://i.imgur.com/QXMk25R.jpgO",
      techStack: ["Reacht", "Redux", "ReduxToolkit", "Javascript", "CSS", "HTML"],
      mobile: false,
    },
    {
      id: 4,
      title: "Make It Happen",
      type: "Frontend Mobile Project",
      description:
        "This intuitive app allows you to manage your tasks effortlessly with a calendar-based interface. Organize your ToDos by date, set reminders, and track your progress. Designed for simplicity and efficiency, it helps you stay on top of your schedule and boosts your productivity.",
      liveLink: "https://snack.expo.dev/@l3x-fx/makeithappen",
      FERepoLink: "https://github.com/l3x-fx/MakeItHappen",
      BERepoLink: "",
      screenshot: "https://i.imgur.com/Snj86SX.png",
      techStack: ["React Native", "Redux", "Javascript"],
      mobile: true,
    },
  ],
}

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
})

export const selectProjects = (state) => state.projects.projects
export const { actions, reducer } = projectsSlice
export default reducer
