import React from 'react'

import "./audioPlayer.css"
import ProgressCircle from './progressCircle'

export default function AudioPlayer({ currentTrack }) {
    const imageUrl = currentTrack?.images?.[0]?.url
    console.log(imageUrl);
    return (
        <div className='player-body'>
            <div className='player-left-body'>
                <ProgressCircle
                    percentage={75}
                    isPLaying={true}
                    //image={currentTrack?.currentTrack?.images?.[0]?.url}
                    size={300}
                    color="#C96850"
                />
            </div>
            <div className='player-right-body'></div>
        </div>
    );
}

