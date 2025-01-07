import React from 'react'
import "./albumImage.css"

export default function AlbumImage({url}) {
    try {
        if (!url) {
            console.log("Image URL is undefined");
        } else {
            console.log(url);
        }
    } catch (error) {
        console.log(error);
    }

  return <div>AlbumImage</div>
  
}
