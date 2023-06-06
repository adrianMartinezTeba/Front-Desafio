import React, { useState } from 'react';

const InterestsForm = () => {
  const interests = ['caca','pis','hola','iewbska'];
  const [selectedInterests, setSelectedInterests] = useState([]);
//onsubmit un put de user para que se actualice su array de intereses 
  const handleInterestChange = (event) => {
    const interest = event.target.value;
    if (event.target.checked) {
      setSelectedInterests((prevSelectedInterests) => [...prevSelectedInterests, interest]);
    } else {
      setSelectedInterests((prevSelectedInterests) =>
        prevSelectedInterests.filter((item) => item !== interest)
      );
    }
  };
  const onSubmit = () =>{
    
  }
  return (
    <div>
      <h1>Interests Form</h1>
      <form>
        {interests.map((interest) => (
          <div key={interest}>
            <label>
              <input
                type="checkbox"
                value={interest}
                checked={selectedInterests.includes(interest)}
                onChange={handleInterestChange}
              />
              {interest}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default InterestsForm;
