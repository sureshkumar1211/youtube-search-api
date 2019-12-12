import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList({ videosList, selectedEventHandler })
{
    let renderVideos = videosList.map(({ id, snippet }, index) =>
    {
        return <VideoItem key={index} selectedEventHandler={selectedEventHandler} details={{ snippet, id }} />;
    });
    return (
        <div>
            {renderVideos}
        </div>
    )
}
