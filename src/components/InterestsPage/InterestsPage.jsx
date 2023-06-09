import React, { useState } from 'react';
import InterestsForm from '../interestsForm/interestsForm'
import Buscar from '../Buscar/Buscar';

const InterestsPage = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);
  
    return (
      <div>
        <InterestsForm setSelectedInterests={setSelectedInterests} />
        <Buscar selectedInterests={selectedInterests} />
      </div>
    );
  };
  
  export default InterestsPage;
