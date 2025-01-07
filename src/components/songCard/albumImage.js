// import React from 'react'
// import "./albumImage.css"

// export default function AlbumImage({url}) {
//     try {
//         if (!url) {
//             console.log("Image URL is undefined");
//         } else {
//             console.log(url);
//         }
//     } catch (error) {
//         console.log(error);
//     }

//   return(
//     <div className='albumImage flex'>
//         <img src = {url} alt ="album art" className='albumImage-art' />
//         <div className='albumImage-shadow'>
//         </div>
//     </div>
//     )
// }


import React from "react";
import "./albumImage.css";

export default function AlbumImage({ url }) {
  return (
    <div className="albumImage flex">
      <img src={url} alt="album art" className="albumImage-art" />
    </div>
  );
}