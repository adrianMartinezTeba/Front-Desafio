
// import React, { useEffect, useContext, useState } from "react";
// import { useParams } from "react-router-dom";
// import Menu from "../Menu/Menu";
// import { NewsContext } from "../../context/NewContext/NewState";
// import './NewIndividual.scss';

// const NewIndividual = () => {
//     const { id } = useParams();
//     const { news, getNewById } = useContext(NewsContext);
//     const [isTextExpanded, setIsTextExpanded] = useState(false); // Nuevo estado

//     useEffect(() => {
//         getNewById(id);
//     }, []);

//     useEffect(() => {
//         console.log(news);
//         console.log(news?.tags);
//     }, [news]);

//     return (
//         <div>
//             <Menu />
//             {news ? (
//                 <>
//                 <div className="fondo">
//                     <img className="imagen-fondo" src={news.imageUrl} alt={news.title} />
//                     <div className="overlay">
//                         <p>{news.tags ? news.tags.join(", ") : "Sin etiquetas"}</p>
//                         <h2>{news.title}</h2>
//                     </div>
//                 </div>
//                 <div className={`texto ${isTextExpanded ? "expanded" : ""}`}> {/* Añadimos la clase condicionalmente */}
//                     <div className="expand-button" onClick={() => setIsTextExpanded(!isTextExpanded)}> {/* Nuevo botón de expansión */}
//                         {isTextExpanded ? "Minimizar" : "Expandir"}
//                     </div>
//                     <p>Fecha de publicación: {new Date(news.date).toLocaleDateString()}</p>
//                     <p>{news.body}</p>
//                 </div>
//                 </>
//             ) : (
//                 <p>Cargando noticias...</p>
//             )}
//         </div>
//     );
// };

// export default NewIndividual;

import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../Menu/Menu";
import { NewsContext } from "../../context/NewContext/NewState";
import './NewIndividual.scss';

const NewIndividual = () => {
    const { id } = useParams();
    const { news, getNewById } = useContext(NewsContext);
    const [isTextExpanded, setIsTextExpanded] = useState(false); 

    useEffect(() => {
        getNewById(id);
    }, []);

    useEffect(() => {
        console.log(news);
        console.log(news?.tags);
    }, [news]);

    return (
        <div className="container">
            <Menu />
            {news ? (
                <>
                <div className="fondo">
                    <img className="imagen-fondo" src={news.imageUrl} alt={news.title} />
                    <div className="overlay">
                        <p>{news.tags ? news.tags.join(", ") : "Sin etiquetas"}</p>
                        <h2>{news.title}</h2>
                    </div>
                </div>
                <div className={`texto ${isTextExpanded ? "expanded" : ""}`}>
                    <div className="expand-button" onClick={() => setIsTextExpanded(!isTextExpanded)}>
                        {isTextExpanded ? "Minimizar" : "Expandir"}
                    </div>
                    <p>Fecha de publicación: {new Date(news.date).toLocaleDateString()}</p>
                    <p>{news.body}</p>
                </div>
                </>
            ) : (
                <p>Cargando noticias...</p>
            )}
        </div>
    );
};

export default NewIndividual;
