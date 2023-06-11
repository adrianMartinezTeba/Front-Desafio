


import React, { useState } from 'react';

import Menu from '../Menu/Menu';
import './interestsForm.scss';

const InterestsForm = () => {
  const interests = ['Tecnología', 'Ciencia', 'Salud', 'Arte', 'Jurisprudencia', 'Sociologia'];
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [buttonStates, setButtonStates] = useState({});
  
  const handleInterestClick = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests((prevSelectedInterests) =>
        prevSelectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests((prevSelectedInterests) => [...prevSelectedInterests, interest]);
    }
    setButtonStates((prevState) => ({ ...prevState, [interest]: !prevState[interest] }));
  };
  
  const languages = ['Inglés', 'Español', 'Francés', 'Alemán', 'Italiano'];
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [languageButtonStates, setLanguageButtonStates] = useState({});
  
  const handleLanguageClick = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages((prevSelectedLanguages) =>
        prevSelectedLanguages.filter((item) => item !== language)
      );
    } else {
      setSelectedLanguages((prevSelectedLanguages) => [...prevSelectedLanguages, language]);
    }
    setLanguageButtonStates((prevState) => ({ ...prevState, [language]: !prevState[language] }));
  };
  
  const onFormSubmit = (event) => {
    event.preventDefault();
  
    const selectedItems = [...selectedInterests, ...selectedLanguages];
    console.log('Selecciones:', selectedItems);
    
    setSelectedInterests([]);
    setButtonStates({});
    setSelectedLanguages([]);
    setLanguageButtonStates({});
  };
  
  return (
    <div className="container">
      <h1 className="interest-h1">Intereses</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <h3 className="interest-h3">Intereses profesionales</h3>
          {interests.map((interest) => (
            <button
              key={interest}
              type="button"
              className={`interest-button ${buttonStates[interest] ? 'selected' : ''}`}
              onClick={() => handleInterestClick(interest)}
            >
              {interest}
            </button>
          ))}
        </div>
        
        <div>
          <h3 className="interest-h3">Idiomas</h3>
          {languages.map((language) => (
            <button
              key={language}
              type="button"
              className={`interest-button ${languageButtonStates[language] ? 'selected' : ''}`}
              onClick={() => handleLanguageClick(language)}
            >
              {language}
            </button>
          ))}
        </div>
        
        <button type="submit" className="Env-button">Enviar</button>
      </form>
      <Menu />
    </div>
  );
};

export default InterestsForm;












/*
import React, { useState } from 'react';

import Menu from '../Menu/Menu';
import './interestsForm.scss';

const InterestsForm = () => {
  const interests = ['Tecnología', 'Ciencia', 'Salud', 'Arte', 'Jurisprudencia', 'Sociologia'];
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [buttonStates, setButtonStates] = useState({});
  
  const handleInterestClick = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests((prevSelectedInterests) =>
        prevSelectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests((prevSelectedInterests) => [...prevSelectedInterests, interest]);
    }
    setButtonStates((prevState) => ({ ...prevState, [interest]: !prevState[interest] }));
  };
  
  const languages = ['Inglés', 'Español', 'Francés', 'Alemán', 'Italiano'];
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [languageButtonStates, setLanguageButtonStates] = useState({});
  
  const handleLanguageClick = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages((prevSelectedLanguages) =>
        prevSelectedLanguages.filter((item) => item !== language)
      );
    } else {
      setSelectedLanguages((prevSelectedLanguages) => [...prevSelectedLanguages, language]);
    }
    setLanguageButtonStates((prevState) => ({ ...prevState, [language]: !prevState[language] }));
  };
  
  const onFormSubmit = (event) => {
    event.preventDefault();
  
    console.log('Intereses seleccionados:', selectedInterests);
    console.log('Idiomas seleccionados:', selectedLanguages);
    
    setSelectedInterests([]);
    setButtonStates({});
    setSelectedLanguages([]);
    setLanguageButtonStates({});
  };
  
  return (
    <div className="container">
      <h1 className="interest-h1">Intereses</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <h3 className="interest-h3">Intereses profesionales</h3>
          {interests.map((interest) => (
            <button
              key={interest}
              type="button"
              className={`interest-button ${buttonStates[interest] ? 'selected' : ''}`}
              onClick={() => handleInterestClick(interest)}
            >
              {interest}
            </button>
          ))}
        </div>
        
        <div>
          <h3 className="interest-h3">Idiomas</h3>
          {languages.map((language) => (
            <button
              key={language}
              type="button"
              className={`interest-button ${languageButtonStates[language] ? 'selected' : ''}`}
              onClick={() => handleLanguageClick(language)}
            >
              {language}
            </button>
          ))}
        </div>
        
        <button type="submit" className="Env-button">Enviar</button>
      </form>
      <Menu />
    </div>
  );
};

export default InterestsForm;
*/ 