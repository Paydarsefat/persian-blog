import React from "react"
const Video = ({ videoSourceURL, videoTitle, ...props }) => (
  <div className="Video">{videoSourceURL}</div>
)
export default Video
