import React from 'react'
import './sidenav.css'
import SidenavButton from './sidenavButton'
import { IoLibrary} from 'react-icons/io5'
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md'
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa'

export default function Sidenav() {
  return (
    <div className='sidenav-container'>
        <img src= 'https://i.pinimg.com/736x/d0/c4/22/d0c42271fa501e3b3df4637cf479c8a3.jpg' 
        className='profile-picture' 
        alt='profile-pic'/>
      <div>
        <SidenavButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SidenavButton title="Trending" to="/trending" icon={<FaGripfire/>}/>
        <SidenavButton title="Player" to="/player" icon={<FaPlay/>}/>
        <SidenavButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
        <SidenavButton title="Library" to="/library" icon={<IoLibrary/>}/>
      </div>

      <SidenavButton title="Sign Out" to="/" icon={<FaSignOutAlt/>}/>
    </div>

  )
}
