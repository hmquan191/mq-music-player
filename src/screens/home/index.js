import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../library'
import Feed from '../feed'
import Trending from '../trending'
import Player from '../player'
import Favorites from '../favorites'

import './home.css'
import Sidenav from '../../components/side-nav'

export default function Home() {
  return (
    <Router>
      <div className='main-body'>
        <Sidenav />
        <Routes>
            <Route path ="/" element={<Library/>} />
            <Route path = "/feed" element={<Feed/>} />
            <Route path ="/trending" element={<Trending/>} />
            <Route path = "/player" element={<Player/>} />
            <Route path ="/favorites" element={<Favorites/>} />
        </Routes>
      </div>
    </Router>
  )
}
