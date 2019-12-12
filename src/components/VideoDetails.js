import React from 'react'

export default function VideoDetails({ details })
{
    let videoSrc = `https://www.youtube.com/embed/${details.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title={details.snippet.title} src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="header">{details.snippet.title}</h4>
                <p className="description">{details.snippet.description}</p>
            </div>
        </div>
    )
}
