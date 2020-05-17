import React from "react"
const Video = ({ videoSourceURL, videoTitle, ...props }) => (
  <div className="Video">
    <iframe 
      src={videoSourceURL} 
      frameborder="0" 
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      
    </iframe>
  </div>
)
export default Video
