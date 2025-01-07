import React from 'react'
import "./albumInfo.css"

export default function AlbumInfo({album}) {
    console.log(album);

    const artists = [];
    album?.album?.artists?.forEach(element => {
        artists.push(element.name);
    });

    return <div>
        <div className='albumName-container'>
            <div className='marquee'>
                <p>{album?.album?.name + " - " + artists?.join(", ")}</p>
            </div>
        </div>
        <div className='album-info'>
            <p>{`${album?.album?.name} is an ${album?.album?.type} by ${artists?.join(", ")}  with ${album?.album?.total_tracks} track(s)`}</p>
        </div>
        <div className='album-release'>
            <p> Release Date: {album?.album?.release_date} </p>
        </div>
    </div>
}
