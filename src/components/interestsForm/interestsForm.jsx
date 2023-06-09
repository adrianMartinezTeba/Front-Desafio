import React, { useState } from 'react';
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

  const onInterestsSubmit = (event) => {
    event.preventDefault();

    console.log('Intereses seleccionados:', selectedInterests);

    setSelectedInterests([]);
    setButtonStates({});
  };

  return (
    <div className="container">
      <h1 className="interest-h1">Intereses</h1>
      <h3 className="interest-h3">Intereses profesionales</h3>
      <form onSubmit={onInterestsSubmit}>
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
        <button type="submit" className="Env-button">Enviar</button>
      </form>
      
    </div>
  );
};

export default InterestsForm;