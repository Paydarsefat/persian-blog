import React from "react"
const Video = ({ videoSourceURL, videoTitle, ...props }) => (
  <div className="Video">
    <iframe 
      src="https://www.youtube.com/embed/zCl2sU03tcc" 
      frameborder="0" 
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      
    </iframe>
  </div>
)
export default Video
