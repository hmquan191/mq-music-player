import React, { useEffect, useState } from 'react'
import "./player.css"
import { useLocation } from 'react-router-dom';
import apiClient from '../../spotify';
import SongCard from '../../components/songCard';
import Queue from '../../components/queue';
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

  return (
    <div className='screen-container flex'>
      <div className="left-player-body"></div>
      <div className="right-player-body"></div>
      <SongCard album={currentTrack.album}/>
      {/* <Queue/> */}
    </div>
  );
}
