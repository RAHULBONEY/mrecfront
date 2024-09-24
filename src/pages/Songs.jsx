import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Songs.css";

const Songs = () => {
  const [tracks, setTracks] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("query");

  const getTracks = async () => {
    let data = await fetch(
      `https://v1.nocodeapi.com/rahulboney/spotify/nxHHKNxUdTrGgcEC/search?q=${searchTerm}&type=track`
    );
    let convertedData = await data.json();
    setTracks(convertedData.tracks.items);
  };

  return (
    <div className="songs-container">
      <h1 className="search-term">{searchTerm}</h1>
      <button onClick={getTracks} className="search-button">
        Check
      </button>
      <div className="tracks-grid">
        {tracks.map((element) => (
          <div className="song-card" key={element.id}>
            <img
              src={element.album.images[0].url}
              alt={element.name}
              className="song-image"
            />
            <div className="song-info">
              <h3 className="song-title">{element.name}</h3>
              <p className="song-artist">{element.artists[0].name}</p>
            </div>
            {element.preview_url && (
              <audio className="song-audio" controls>
                <source src={element.preview_url} type="audio/mpeg" />
              </audio>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songs;
