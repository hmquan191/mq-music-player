import React, { useEffect, useState } from 'react'
import "./player.css"
import { useLocation } from 'react-router-dom';
import apiClient from '../../spotify';
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
import AudioPlayer from '../../components/audioPlayer';
export default function Player() {

  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if(location.state){
      apiClient.get("playlists/" + location.state?.id + "/tracks")
      .then((response) => {
        console.log(response.data);
        setTracks(response.data.items);
        setCurrentTrack(response.data.items[0].track);
      });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks])

  return (
    <div className='screen-container flex'>
      <div className="left-player-body">
        <AudioPlayer
          currentTrack={currentTrack} 
          ispLaying = {true} 
          currentIndex={currentIndex} 
          setCurrentIndex={setCurrentIndex}
          />
      </div>
      <div className="right-player-body">
      <SongCard album={currentTrack?.album}/>
      <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}
