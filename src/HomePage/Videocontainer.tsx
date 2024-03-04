import React from 'react'
import '../css/home.css';
import '../css/asset.css';
import bgVideo from '../resource/bg-vid.mp4'; 

export const Videocontainer:React.FC = () => {
  return (
    <div className="video-container" id="videoContainer">
    <video src={bgVideo} id="video-slider" loop autoPlay muted></video>
    <div className="video-overlay">
        <h1 className="overlay-text lexend">Let's start the Earnings</h1>
        <a className="bn39 mt-5" href="/"><span className="bn39span">Enroll now</span></a>

      </div>

    </div>
  )
}
