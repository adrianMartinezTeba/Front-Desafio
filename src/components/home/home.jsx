import React from 'react'
import { Link} from "react-router-dom";
const Home = () => {
  const noticias = ['Vamos chevere', 'esperemos seguir asi']
  return (
    <>
      <div>
        <h3>Noticias</h3>
        {noticias.map((noticia) => (
          <div key={noticia}>
            <p>{noticia}</p>
          </div>
        ))}
        <Link to="/profile">
          <img src="ruta_de_la_imagen" alt="Profile" />
        </Link>
      </div>
      <div>
        <p>Proximos eventos</p>
        
      </div>
    </>
  )
}

export default Home