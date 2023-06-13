import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';
import './InterestsForm.scss';
import { TagContext } from '../../context/TagsContext/TagContext';
import { EventContext } from '../../context/EventContext/EventState';



const InterestsForm = () => {
  const { user, getUserLogged,update } = useContext(UserContext);
  const {tags,getTags}=useContext(TagContext)
  const {events,getAllEvents} = useContext(EventContext);
  const [currentView, setCurrentView] = useState(1);
  const [previousView, setPreviousView] = useState(null);
  
 

  useEffect(() => {
getTags(),
getUserLogged(),
getAllEvents()

  }, []);
  useEffect(() => {
 console.log(user);
 console.log(tags);
 console.log(events);
  }, [user,tags,events]);
  
  const handleContinue = () => {
    setPreviousView(currentView);
    setCurrentView(currentView + 1);
  
  };

  const handleBack = () => {
    setCurrentView(previousView);
  };

  const renderView = () => {
    switch (currentView) {
      case 1:
        return (
          <>
         
          
          <div className="profile-container">
             
                <div className="info-user">
                {currentView === 1 && (
                <div className="user-details">
                  <h2>{user.name}</h2>
                  <h2>{user.email}</h2>
                </div>
              )}

              <label htmlFor="name">Nombre y apellido</label>
              <input type="text" id="name" value={user.name} />

              <label htmlFor="Grado">Grado</label>
              <input type="text" id="Grado" value={user.course} />

              <label htmlFor="fecha">Fecha de nacimiento</label>
              <input type="text" id="fecha" value={user.birth_date} />

              <label htmlFor="pais">Pais de procedencia</label>
              <input type="text" id="pais" value={user.country} />

              <label htmlFor="situacion">Situación laboral</label>
              <input type="text" id="situacion" value={user.situationLaboral} />
              
              
              <div className="languages-container">
              <h2 className="languages">Idiomas</h2>
           
            </div>
         
            <button onClick={handleContinue}>Continuar</button>
          </div>
          </div>
          </>
        );
      case 2:
        return (
          <>
          
        
          <div className="info-user">
             <div className="user-details">
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            </div>
            
<h3 className='view2'>Notificaciones</h3>
<div className="label-input-container">
<label htmlFor="eventos">Nuevos eventos</label>
        <select id="eventos" className="select-input">
          <option value="opcion1">Contactos</option>
          <option value="opcion2">EDEM</option>
          <option value="opcion3">Lanzadera</option>
        </select>
</div>

<div className="label-input-container">
        <label htmlFor="mensajes">Mensajes</label>
        <select id="mensajes" className="select-input">
          <option value="seguidos">Seguidos</option>
          <option value="todos">Todos</option>
        </select>
      </div>

      <div className="label-input-container">
        <label htmlFor="noticias">Noticias</label>
        <select id="noticias" className="select-input">
          <option value="edem">EDEM</option>
          <option value="contactos">Contactos</option>
          <option value="todos">Todos</option>
        </select>
      </div>
      


<h3 className='view2'>Privacidad</h3>
<div className="label-input-container">
        <label htmlFor="foto">Foto de perfil</label>
        <select id="foto" className="select-input">
          <option value="contactos">Contactos</option>
          <option value="todos">Todos</option>
        </select>
      </div>
      <div className="label-input-container">
        <label htmlFor="correo">Correo</label>
        <select id="correo" className="select-input">
          <option value="contactos">Contactos</option>
          <option value="todos">Todos</option>
        </select>
      </div>
   
      <div className="label-input-container">
        <label htmlFor="correo">Estudios</label>
        <select id="estudios" className="select-input">
          <option value="contactos">Contactos</option>
          <option value="todos">Todos</option>
        </select>
      </div>




            <div className="button-container">
            <button  className='button2' onClick={handleBack}>Atrás</button>
            <button className='button2'  onClick={handleContinue}>Continuar</button>
            </div>
          </div>
          
          </>
        );
      case 3:
        return (
          <div className="info-user">
             <div className="user-details">
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            </div>
            
            <div className="button-container">
            <button onClick={handleBack}>Atrás</button>
            <Link to="/home">Terminar</Link>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="profile-container">
        {renderView()}
        {/* <p>Hola</p> */}
      </div>
    </>
  );
};

export default InterestsForm;
