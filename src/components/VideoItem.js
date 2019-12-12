import React from 'react'

export default function VideoItem({ details, selectedEventHandler })
{
    return (
        <div>
            <div className="video-item item">
                <img alt={details.snippet.title}
                    className="image"
                    style={{ maxWidth: "200px" }}
                    onClick={selectedEventHandler.bind(this, details)}
                    src={details.snippet.thumbnails.medium.url}></img>
                <div className="content">
                    <h4 className="header">{details.snippet.title}</h4>
                </div>
            </div>
        </div>
    )
}
