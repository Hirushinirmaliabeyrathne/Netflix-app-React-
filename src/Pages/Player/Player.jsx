import React, { useEffect, useState } from 'react';
import './Player.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjUxZjY1NTMyNGU3ZDVkODYwYjI4ZWM3ZTgyNzQ5YyIsIm5iZiI6MTcyMTkwMjA2OC41NjQ1MjMsInN1YiI6IjY2YTIyMWIwYzRlNjNiZGI3NGUwZmU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x97svbH7UHzeNO4YOwJEXF8gp_ITPoW6TKLj8fkKKK0'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <ArrowBackIcon onClick={() => navigate(-1)} />
      <iframe
        width={'90%'}
        height={'90%'}
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer'
        frameBorder={'0'}
        allowFullScreen
      ></iframe>
      <div className="player-info">
      <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
