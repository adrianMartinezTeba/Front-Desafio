import React from 'react'
import { Link } from "react-router-dom";
import './home.scss'

const Home = () => {
  const noticias = [
    {
      id: 1,
      img: 'https://www.ecoticias.com/wp-content/uploads/2022/01/IPNV_MARIPOA1.jpg',
      title: 'Descubren nueva especie de mariposa en la selva amazónica',
      body: 'Científicos han anunciado el descubrimiento de una nueva especie de mariposa en la selva amazónica. La mariposa, llamada Morpho amazonica, se caracteriza por sus brillantes colores y patrones únicos. Este descubrimiento representa un importante hallazgo en el campo de la entomología.',
      date: '2023-05-10',
      tags: ['naturaleza', 'aire libre']
    },
    {
      id: 2,
      img: 'https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2021/03/20210324starlinkstreak.jpg',
      title: 'Lanzamiento exitoso del nuevo cohete espacial "StarX"',
      body: 'La compañía espacial SpaceX ha logrado un lanzamiento exitoso de su nuevo cohete "StarX". El cohete, diseñado para transportar cargas pesadas a órbita baja, despegó sin contratiempos y colocó su carga en la posición deseada. Este hito representa un avance significativo en la exploración espacial comercial.',
      date: '2023-06-01',
      tags: ['tecnologia']
    },
    {
      id: 3,
      img: 'https://img2.rtve.es/imagenes/24-horas-investigadores-espanoles-hallan-biomarcador-para-detectar-cancer-pancreas-fase-inicial/1643309528395.jpg',
      title: 'Investigadores descubren posible cura para el cáncer de piel',
      body: 'Un equipo de investigadores ha anunciado el descubrimiento de una posible cura para el cáncer de piel. Mediante el uso de una terapia génica innovadora, los científicos lograron eliminar por completo los tumores en ratones de laboratorio. Este avance representa una esperanza para millones de personas afectadas por esta enfermedad.',
      date: '2023-05-25',
      tags: ['medicina']
    },
    {
      id: 4,
      img: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/06/18/5fa438bd91bcf.jpeg',
      title: 'Nueva película de superhéroes rompe récords en taquilla',
      body: 'La última película de superhéroes, titulada "The Guardian", ha roto todos los récords en taquilla. En su primer fin de semana de estreno, la película recaudó más de $100 millones de dólares, superando las expectativas de la industria cinematográfica. Los críticos también elogian la calidad de la película y su impacto cultural.',
      date: '2023-05-15',
      tags: ['cine']
    },
    {
      id: 5,
      img: 'https://www.sportlife.es/uploads/static/sportlife/upload/images/gallery/5cf2a0620ee694025f8b46d6/5cf4d1370de694e074349478-la-ciencia-conforma-los-beneficios-de-la-meditacion.jpg',
      title: 'Estudio revela beneficios de la meditación para la salud mental',
      body: 'Un estudio reciente ha revelado los numerosos beneficios de la meditación para la salud mental. Según los investigadores, la práctica regular de la meditación puede reducir el estrés, mejorar el estado de ánimo y aumentar la resiliencia emocional. Estos hallazgos respaldan la creciente popularidad de la meditación como una herramienta para el bienestar mental.',
      date: '2023-05-05',
      tags: ['yoga', 'paz', 'relajacion']
    }
  ];

  const eventos = [
    {
      img: 'https://www.haciendalasoledad.es/wp-content/uploads/2022/10/Eventos-de-networking.jpg',
      name: 'Evento 1',
      startDate: '2023-06-15',
      attendees: [
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 1 },
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 2 },
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 3 }
      ],
      tags: ['conferencia', 'networking'],
      
    },
    {
      img: 'https://espacio.fundaciontelefonica.com/wp-content/uploads/2020/01/talleres-tecnologias-creativas-2020-1400x600.jpg',
      name: 'Evento 2',
      startDate: '2023-07-10',
      attendees: [
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 4 },
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 5 },
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 6 }
      ],
      tags: ['taller', 'tecnología']
    },
    {
      img: 'https://i.ytimg.com/vi/P9uWUkr0kXs/hqdefault.jpg',
      name: 'Evento 3',
      startDate: '2023-08-20',
      attendees: [
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 7 },
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 8 },
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 9 }
      ],
      tags: ['seminario', 'emprendimiento']
    },
    {
      img: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/06/1043-978x652.jpg',
      name: 'Evento 4',
      startDate: '2023-09-05',
      attendees: [
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 10 },
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 11 },
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 12 }
      ],
      tags: ['congreso', 'educación']
    },
    {
      img: 'https://www.museunacional.cat/sites/default/files/styles/adaptive/public/sales_modern_.jpg',
      name: 'Evento 5',
      startDate: '2023-10-12',
      attendees: [
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 13 },
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 14 },
        { img: ' https://cdn-icons-png.flaticon.com/512/3135/3135768.png', id: 15 }
      ],
      tags: ['presentación', 'arte']
    }
  ];

  return (
    <div className='home-container'>
      <div className='noticias-container'>
        <h3>Noticias</h3>
        <Link to="/profile">
          <img src="ruta_de_la_imagen" alt="Profile" />
        </Link>
        {noticias.map((noticia) => (
          <div key={noticia.id}>
            <img src={noticia.img} alt="img de la noticia" width='500px' />
            {noticia.tags.map((tag) =>
              <button className='tag-btn'>{tag}</button>)}
            <div>
              <p>{noticia.title}</p>
              <p>{noticia.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='recientes-ontainer'>
        <p>Recientes</p>
        <button>Ver todo</button>
        <hr />
        {eventos.map((evento) => (
          <div key={evento.name}>
            <div>
              <img src={evento.img} />
            </div>
            <div>
              <div>
                {evento.tags.map((tag) => (
                  <button className='tag-btn'>{tag}</button>
        ))}
              </div>
              <div>
                <p>{evento.startDate}</p>
                <p>{evento.name}</p>
              </div>
              <div>
                {evento.attendees.map((attended)=>(
                  <img src={attended.img} />
                ))}
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home