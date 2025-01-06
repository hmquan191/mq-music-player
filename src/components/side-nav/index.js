import React, { useEffect, useState } from 'react'
import './sidenav.css'
import SidenavButton from './sidenavButton'
import { IoLibrary} from 'react-icons/io5'
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md'
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa'
import apiClient from '../../spotify'

export default function Sidenav() {
  const [image, setImage] = useState(
    "https://i.scdn.co/image/ab6775700000ee8553b8ae1754735243ad484cfc"
  )
  useEffect(() => {
    apiClient.get("me").then(response => 
      setImage(response.data.images[0].url))
  }, [])
  return (
    <div className='sidenav-container'>
        <img src= {image}
        className='profile-picture' 
        alt='profile-pic'/>
      <div>
        <SidenavButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SidenavButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SidenavButton title="Player" to="/player" icon={<FaPlay/>}/>
        <SidenavButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
        <SidenavButton title="Library" to="/" icon={<IoLibrary/>}/>
        <SidenavButton title="RedVelvet" to ="/redvelvet" ></SidenavButton>
      </div>
      <SidenavButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>

  )
}
