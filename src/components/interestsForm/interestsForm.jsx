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
  const [selectedButtons, setSelectedButtons] = useState([]);




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

  const handleButtonClick = (buttonName) => {
    if (selectedButtons.includes(buttonName)) {
      // Si el botón ya está seleccionado, lo deseleccionamos
      setSelectedButtons(selectedButtons.filter((name) => name !== buttonName));
    } else {
      // Si el botón no está seleccionado, lo seleccionamos
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 1:
        return (
          <>
          <p className='textoarriba'>Comprueba que tus datos son correctos</p>

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
                      <h4>{user.email}</h4>
                    </div>
                  </div>
                )}
<div>
                <label htmlFor="name">Nombre y apellido</label>
                <input type="text" id="name" value={user.name} />
                </div>
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
          <>
             <p className='textoarriba'>Configuración de ajustes y privacidad</p>
          <div className="profile-container">
            <div className="info-user">
              <div className="user-details">
                <div className="profile-image-container">
                  <img src={user.imageUrl} alt="" width={'59px'} />
                </div>
                <div className='user-info'>
                  <h2>{user.name}</h2>
                  <h4>{user.email}</h4>
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
          </>
        );
      case 3:
        return (
          <>
             <p className='textoarriba'>Por último, conozcamos un poco mas de ti</p>
          <div className="profile-container">
            <div className="info-user">
              <div className="user-details">
                <div className="profile-image-container">
                  <img src={user.imageUrl} alt="" width={'59px'} />
                </div>
                <div className="user-info">
                  <h2>{user.name}</h2>
                  <h4>{user.email}</h4>
                </div>
              </div>

              <div className='conocimientos'>
                <h3 className='view2'>Conocimientos</h3>
                <button className={`movis ${selectedButtons.includes('JavaScript') ? 'selected' : ''}`} onClick={() => handleButtonClick('JavaScript')}>    JavaScript
  </button>
  <button className={`movis ${selectedButtons.includes('MongoDB') ? 'selected' : ''}`} onClick={() => handleButtonClick('MongoDB')}>
    MongoDB
  </button>
  <button className={`movis ${selectedButtons.includes('SQL') ? 'selected' : ''}`} onClick={() => handleButtonClick('SQL')}>
    SQL
  </button>
  <button className={`movis ${selectedButtons.includes('React') ? 'selected' : ''}`} onClick={() => handleButtonClick('React')}>
    React
  </button>
  <button className={`movis ${selectedButtons.includes('Node.js') ? 'selected' : ''}`} onClick={() => handleButtonClick('Node.js')}>
    Node.js
  </button>
  <button className={`movis ${selectedButtons.includes('HTML') ? 'selected' : ''}`} onClick={() => handleButtonClick('HTML')}>
    HTML
  </button>
              </div>

              <div className='conocimientos'>
                <h3 className='view2'>Quiero aprender</h3>
                <button className={`movis ${selectedButtons.includes('Emprendimiento') ? 'selected' : ''}`} onClick={() => handleButtonClick('Emprendimiento')}>
    Emprendimiento
  </button>
  <button className={`movis ${selectedButtons.includes('Tecnologia') ? 'selected' : ''}`} onClick={() => handleButtonClick('Tecnologia')}>
    Tecnologia
  </button>
  <button className={`movis ${selectedButtons.includes('Gestión de carteras') ? 'selected' : ''}`} onClick={() => handleButtonClick('Gestión de carteras')}>
    Gestión financiera
  </button>
  <button className={`movis ${selectedButtons.includes('Marketing') ? 'selected' : ''}`} onClick={() => handleButtonClick('Marketing')}>
    Marketing
  </button>

              </div>

              <div className='conocimientos'>
                <h3 className='view2'>Ocio</h3>
                <button className={`movis ${selectedButtons.includes('Cine') ? 'selected' : ''}`} onClick={() => handleButtonClick('Cine')}>
    Cine
  </button>
  <button className={`movis ${selectedButtons.includes('Deportes') ? 'selected' : ''}`} onClick={() => handleButtonClick('Deportes')}>
    Deportes
  </button>
  <button className={`movis ${selectedButtons.includes('Literatura') ? 'selected' : ''}`} onClick={() => handleButtonClick('Literatura')}>
    Literatura
  </button>


              </div>

              


              <div className="button-container">
                <button onClick={handleBack} className='button3'>Atrás</button>
                <Link to="/" className='link-home'>Terminar</Link>
              </div>
            </div>
          </div>
          </>
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
