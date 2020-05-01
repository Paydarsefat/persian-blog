import React from "react"
const Video = ({ videoSourceURL, videoTitle, ...props }) => (
    <div 
        style={{
            width: '100%'
        }}
        className="video" 
        controls
        autoplay
    >
        <iframe
            style={{
                width: '100%',
                minHeight: '350px',
                backgroundColor: 'white',
            }}
            src={videoSourceURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
    </div>
)
export default Video