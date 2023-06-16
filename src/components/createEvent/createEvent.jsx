
import React, { useState, useContext } from "react";
import { EventContext } from "../../context/EventContext/EventState";
import { useNavigate } from 'react-router-dom'; 

import './createEvent.scss'

import barra from '../../assets/image/Rectangle 1.png'
import Menu from "../menu/menu";


const CreateEvent = () => {
  const { createEvent, events } = useContext(EventContext);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    tags: ""
  });

  // Nuevo estado para el mensaje de confirmación
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent(formData);
    // Establecer el mensaje de confirmación
    setConfirmationMessage("¡Evento creado con éxito!");
    // setTimeout(() => {
    //   setConfirmationMessage(""); // borrar el mensaje después de 3 segundos
    //   navigate("/"); // navegar a la página principal después de la creación del evento
    // }, 3000);
  };
  
  return (
    <>
   <div className="event-container">
    <div className="barrita"> 
    <img src={barra} alt=""/>
    </div>
      <p className="crea-event">Crea un evento</p>
      <form onSubmit={handleSubmit}className="form-event">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="  Nombre del evento"
          className="event-in"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder=" Descripción..."
          className="event-inp"
        />
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder=" URL de la imagen"
          className="event-in"
        />
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          placeholder="Fecha de inicio"
          className="event-time"
        />
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          placeholder="Fecha de finalización"
          className="event-time"
        />
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder=" Intereses"
          className="event-in"
        />
        <button type="submit" className="fin-event">Crear Evento</button>
      </form>
      {/* Mostrar el mensaje de confirmación si existe */}
      {confirmationMessage && <p>{confirmationMessage}</p>}
      <Menu />
    </div>
    </>
  );
};

export default CreateEvent;



