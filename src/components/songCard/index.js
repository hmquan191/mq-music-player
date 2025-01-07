
import React from 'react'
import"./songCard.css"
import AlbumInfo from './albumInfo'
import AlbumImage from './albumImage'

export default function SongCard(album) {
  return <div className='songCard-body flex'>
        <AlbumImage url={album?.album?.images?.[0]?.url} />
        <AlbumInfo album={album}/>
    </div>
}
