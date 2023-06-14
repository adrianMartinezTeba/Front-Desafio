import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import Menu from '../Menu/Menu';
import { NewsContext } from '../../context/NewContext/NewState';
import { EventContext } from '../../context/EventContext/EventState';
import { UserContext } from '../../context/UserContext/UserState';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { getUserLogged, user } = useContext(UserContext);
  const { news, getAllNews } = useContext(NewsContext);
  const { getAllEvents, events } = useContext(EventContext);
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    getAllNews();
    getAllEvents();
    getUserLogged();
  }, []);

  useEffect(() => {
    const filtered = news.filter(item => item.oficial === true);
    setFilteredNews(filtered);
  }, [user, news, events]);

  const handleNewsSelect = (newsId) => {
    setSelectedNews(newsId);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="home-container">
      <div className="noticias-container">
        <h3>Noticias</h3>
        <div className="divPruebas">
          <Slider {...settings}>
            {filteredNews.map(item => (
              <Link to={`/news/${item._id}`} key={item._id}>
                <div
                  className={`card ${selectedNews === item._id ? 'active' : ''}`}
                  onClick={() => handleNewsSelect(item._id)}
                >
                  <img src={item.imageUrl} alt={item.title} />
                  <div className="card-content">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-body">{item.body}</p>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
      <div className="recientes-container">
        <p>Recientes</p>
        <button>EDEM</button>
        <button>LANZADERA</button>
        <button>TODO</button>
        <hr />
      </div>
      <Menu />
    </div>
  );
};

export default Home;
