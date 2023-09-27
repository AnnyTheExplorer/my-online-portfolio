import React, { useState, useEffect } from "react";
import Project1 from "../Assets/Images/Project1.JPG";
// import Project2 from "../Assets/Images/Project2.jpeg";
// import Project3 from "../Assets/Images/Project3.jpeg";
// import Project4 from "../Assets/Images/Project4.jpeg";

const projectsData = [
  {
    id: 1,
    title: "PixelGrid",
    description:
      "An image gallery that showcases a collection of visually appealing images",
    image: "Project1.JPG",
    link: "https://pixel-grid-gallery.vercel.app/",
  },
  {
    id: 2,
    title: "Movie Box",
    description:
      "A web based movie search application that allows users to search for top-rated movies by title.",
    image: "Project2.jpeg",
    link: "https://movie-search-app-eta-livid.vercel.app/",
  },
  {
    id: 3,
    title: "Pug",
    description: "An Animal trading webapp",
    image: "Project3.jpeg",
    link: "https://bee-music-react-app.vercel.app/",
  },
  {
    id: 4,
    title: "Sunnyside",
    description: "The Sunnyside landing page was courtesy of frontendmentor.io",
    image: "Project4.jpeg",
  },
];

export default projectsData;
