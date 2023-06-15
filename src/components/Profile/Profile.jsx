import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import Menu from '../Menu/Menu';

import './Profile.scss';

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('');
  const [situationLaboral, setSituationLaboral] = useState('');

  useEffect(() => {
    setName(user.name);
    setCourse(user.course);
    setBirthDate(user.birth_date);
    setCountry(user.country);
    setSituationLaboral(user.situationLaboral);
  }, [user]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSituationLaboralChange = (e) => {
    setSituationLaboral(e.target.value);
  };

  const handleSaveChanges = () => {
    const updatedUser = {
      ...user,
      name,
      course,
      birth_date: birthDate,
      country,
      situationLaboral,
    };
    updateUser(updatedUser);
  };

  return (

    <>
    
    
      <div className='form-profile'>
        <h2 className='configuracion'>Configuración</h2>
        
        <label htmlFor="name">Nombre y apellido</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />

        <label htmlFor="Grado">Grado</label>
        <input type="text" id="Grado" value={course} onChange={handleCourseChange} />

        <label htmlFor="fecha">Fecha de nacimiento</label>
        <input type="text" id="fecha" value={birthDate} onChange={handleBirthDateChange} />

        <label htmlFor="situacion">Situación laboral</label>
        <input type="text" id="situacion" value={situationLaboral} onChange={handleSituationLaboralChange} />
      <br />
        <label htmlFor="password" className='repit'>Cambiar contraseña</label>
        <input type="password" id="pais"  onChange={handleCountryChange} />

        <label htmlFor="password" className='repit'>Repite contraseña</label>
        <input type="password" id="pais"  onChange={handleCountryChange} />

        <button className='save-profile'>Guardar</button>
      </div>
      <Menu />
    </>
  );
};

export default Profile;
