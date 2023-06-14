import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';
import './InterestsForm.scss';
import { TagContext } from '../../context/TagsContext/TagContext';



const InterestsForm = () => {
  const { user, getUserLogged, update } = useContext(UserContext);
  const { tags, getTags } = useContext(TagContext)
  const [currentView, setCurrentView] = useState(1);
  const [previousView, setPreviousView] = useState(null);




  useEffect(() => {
    getTags(),
      getUserLogged()

  }, []);
  useEffect(() => {
    console.log(user);
    console.log(tags);
  }, [user, tags]);

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

                    <label htmlFor="profileImage" className="file-input-label">
                      <div className="file-input-circle"></div>
                      <input type="file" id="profileImage" className="file-input" />
                      📷
                    </label>

                    <div className='user-info'>
                      <h2>{user.name}</h2>
                      <h2>{user.email}</h2>
                    </div>
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



                <button onClick={handleContinue} className="button2">Continuar</button>
              </div>
            </div>
          </>
        );

      case 2:
        return (
          <div className="profile-container">
            <div className="info-user">
              <div className="user-details">
                <div className="profile-image-container">
                  <img src={user.imageUrl} alt="" width={'59px'} />
                </div>
                <div className='user-info'>
                  <h2>{user.name}</h2>
                  <h2>{user.email}</h2>
                </div>
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
                <button className='button2' onClick={handleBack}>Atrás</button>
                <button className='button2' onClick={handleContinue}>Continuar</button>
              </div>
            </div>

          </div>
        );
      case 3:
        return (
          <div className="profile-container">
            <div className="info-user">
              <div className="user-details">
                <div className="profile-image-container">
                  <img src={user.imageUrl} alt="" width={'59px'} />
                </div>
                <div className="user-info">
                  <h2>{user.name}</h2>
                  <h2>{user.email}</h2>
                </div>
              </div>

              <div>
                <h3 className='view2'>Conocimientos</h3>

              </div>
              <div>
                <h3 className='view2'>Quiero aprender</h3>
              </div>
              <div>
                <h3 className='view2'>Ocio</h3>
              </div>
              <div>
                <h3 className='view2'>Intereses</h3>
              </div>


              <div className="button-container">
                <button onClick={handleBack} className='button2'>Atrás</button>
                <Link to="/home" className='link-home'>Terminar</Link>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (

    <div className="principal-container">
      {renderView()}
    </div>

  );
};

export default InterestsForm;
