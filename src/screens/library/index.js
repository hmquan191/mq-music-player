import React, { useState, useEffect } from "react";
import APIKit from "../../spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "./library.css";
import { useNavigate } from "react-router-dom";

export default function Library() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    APIKit.get("me/playlists")
      .then((response) => {
        setPlaylists(response.data.items || []);
      })
      .catch((error) => {
        console.error("Error fetching playlists:", error);
      });
  }, []);

  const navigate = useNavigate();
  const playPlaylist = (id) => {
    navigate("/player", { state: { id: id } });
  };

  return (
    <div className="screen-container">
      <div className="library-body">
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <div
              className="playlist-card"
              key={playlist.id}
              onClick={() => playPlaylist(playlist.id)}
            >
              <img
                src={playlist.images?.[0]?.url || "default-image-url.png"}
                className="playlist-image"
                alt={`${playlist.name} Art`}
              />
              <p className="playlist-title">{playlist.name}</p>
              <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
              <div className="playlist-fade">
                <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          ))
        ) : (
          <p className="no-playlists-message">No playlists found.</p>
        )}
      </div>
    </div>
  );
}
