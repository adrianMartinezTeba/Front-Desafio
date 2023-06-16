
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import Menu from '../menu/menu';
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
  const [filteredNewsOfi, setFilteredNewsOfi] = useState([]);
  const [filteredNewsEDEM, setFilteredNewsEDEM] = useState([]);
  const [filteredEventsEDEM, setFilteredEventsEDEM] = useState([]);
  const [allEDEM, setAllEDEM] = useState([]);
  const [filteredNewsLANZADERA, setFilteredNewsLANZADERA] = useState([]);
  const [filteredEventsLANZADERA, setFilteredEventsLANZADERA] = useState([]);
  const [allLANZADERA, setAllLANZADERA] = useState([]);
  const [filteredNewsOTROS, setFilteredNewsOTROS] = useState([]);
  const [filteredEventsOTROS, setFilteredEventsOTROS] = useState([]);
  const [allOTROS, setAllOTROS] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showFilteredEDEM, setShowFilteredEDEM] = useState(true);
  const [showFilteredLANZADERA, setShowFilteredLANZADERA] = useState(false);
  const [showFilteredOTROS, setShowFilteredOTROS] = useState(false);

  useEffect(() => {
    getAllNews();
    getAllEvents();
    getUserLogged();
  }, []);

  useEffect(() => {
    const newsOficial = news.filter(item => item.oficial === true);
    setFilteredNewsOfi(newsOficial);
    const newsEdem = news.filter(item => item.createdBy === "EDEM");
    setFilteredNewsEDEM(newsEdem);
    const eventsEdem = events.filter(item => item.createdBy === "EDEM");
    setFilteredEventsEDEM(eventsEdem);
    const newsLanzadera = news.filter(item => item.createdBy === "LANZADERA");
    setFilteredNewsLANZADERA(newsLanzadera);
    const eventsLanzadera = events.filter(item => item.createdBy === "LANZADERA");
    setFilteredEventsLANZADERA(eventsLanzadera);
    const newsOtros = news.filter(item => item.createdBy === "OTROS");
    setFilteredNewsOTROS(newsOtros);
    const eventsOtros = events.filter(item => item.createdBy === "OTROS");
    setFilteredEventsOTROS(eventsOtros);
    const eventsNewsEDEM = eventsEdem.concat(newsEdem);
    setAllEDEM(eventsNewsEDEM);
    const eventsNewsLANZADERA = eventsLanzadera.concat(newsLanzadera);
    setAllLANZADERA(eventsNewsLANZADERA);
    const eventsNewOTROS = eventsOtros.concat(newsOtros);
    setAllOTROS(eventsNewOTROS);
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

  const handleShowFilteredEDEM = () => {
    setShowFilteredEDEM(true);
    setShowFilteredLANZADERA(false);
    setShowFilteredOTROS(false);
  };

  const handleShowFilteredLANZADERA = () => {
    setShowFilteredLANZADERA(true);
    setShowFilteredEDEM(false);
    setShowFilteredOTROS(false);
  };

  const handleShowFilteredOTROS = () => {
    setShowFilteredOTROS(true);
    setShowFilteredEDEM(false);
    setShowFilteredLANZADERA(false);
  };

  return (
    <div className="home-container">
      <div className="noticias-container">
        <h3>Noticias</h3>
        <div className="divPruebas">
          <Slider {...settings}>
            {filteredNewsOfi.map(item => (
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
        <button onClick={handleShowFilteredEDEM}>EDEM</button>
        <button onClick={handleShowFilteredLANZADERA}>LANZADERA</button>
        <button onClick={handleShowFilteredOTROS}>OTROS</button>
        <hr />
        <div className='all-container'>
          {showFilteredEDEM && (
            <div>
              <h4>EDEM</h4>
              {allEDEM.map(item => (
                <div key={item._id}>
                  <h5>{item.title}</h5>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          )}
          {showFilteredLANZADERA && (
            <div>
              <h4>LANZADERA</h4>
              {allLANZADERA.map(item => (
                <div key={item._id}>
                  <h5>{item.title}</h5>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          )}
          {showFilteredOTROS && (
            <div>
              <h4>OTROS</h4>
              {allOTROS.map(item => (
                <div key={item._id}>
                  <h5>{item.title}</h5>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Home;
