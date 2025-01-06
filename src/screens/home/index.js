import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../library'
import Feed from '../feed'
import Trending from '../trending'
import Player from '../player'
import Favorites from '../favorites'
import RedVelvet from '../../redvelvet'
import './home.css'
import Sidenav from '../../components/side-nav'
import Login from '../auth/login'
import { setClientToken } from '../../spotify'

export default function Home() {

  const[token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash="";
    if(!token && hash){
      const _token = hash.split("&")[0].split('=')[1]
      window.localStorage.setItem("token", _token);
      setToken(_token);

    } else {
      setToken(token);
      setClientToken(token);
    }

  }, [])
  return !token ? (
    <Login/>
    ) : (

      
    <Router>
      <div className='main-body'>
        <Sidenav /> {/* Sidenav luôn nằm bên trái */}
        <div className="content"> {/* Nội dung chính */}
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/redvelvet" element={<RedVelvet />} />
          </Routes>
        </div>
      </div>
    </Router>

  )
}
