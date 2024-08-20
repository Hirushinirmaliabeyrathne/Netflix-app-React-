import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import tersmith from '../../assets/tearsmith.jpg';
import Series from '../../assets/Series.png';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoIcon from '@mui/icons-material/Info';
import Title from '../../Components/Titlecards/Title';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="tersmith">
        <img src={tersmith} alt="Tearsmith" className='tersmith-img' />
        <div className="tearsmith-title">
          <img src={Series} alt="Series" className='series-img' />
          <p>When a family adopts Nica and Ragel together, the orphans' bitter rivalry leads to a deep attraction. A film that hit Netflix's Top 10 in 89 countries.</p>
          <div className="tearsmith-btn">
            <button className='btn'><PlayCircleIcon /> Play</button>
            <button className='btn'><InfoIcon /> More Info</button>
          </div>
        </div>
      </div>
      <div className="more-cards">
        <Title title={"Today's Top Pick for You"} category={"now_playing"} />
        <Title title={"New on Netflix"} category={"popular"} />
        <Title title={"Top Searches"} category={"top_rated"} />
        <Title title={"Upcoming"} category={"upcoming"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
