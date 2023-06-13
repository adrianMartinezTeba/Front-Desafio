import React, { useContext, useState } from 'react';
import { EventContext } from '../../context/EventContext/EventState';

const CreateEvent = () => {
    const { createEvent } = useContext(EventContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        createEvent({ name, description });
        setName('');
        setDescription('');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre del evento:</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />

                <label htmlFor="description">Descripción del evento:</label>
                <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} required />

                <button type="submit">Crear evento</button>
            </form>
        </div>
    );
};

export default CreateEvent;
