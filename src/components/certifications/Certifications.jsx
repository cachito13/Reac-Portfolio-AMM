import React from 'react'
import './certifications.css'
import Avt1 from '../../assets/desarrollo.png'
import Avt2 from '../../assets/javascript.png'
import Avt3 from '../../assets/react.png'


// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const data = [
  {
    avatar: Avt1,
    name: 'Desarrollo Web',
    review: 'Capacitado en la creación de sitios web estáticos. Dominio de HTML, CSS y Bootstrap, implementando las mejores prácticas de diseño web. Experiencia en versionado de código con GIT y uso de preprocesadores como SASS. Conocimientos en SEO y habilidades para subir y gestionar sitios en servidores. Capacidad para presentar presupuestos y brindar atención al cliente de manera efectiva.',

  },
  {
    avatar: Avt2,
    name: 'JavaScript',
    review: 'Capacitado en uno de los lenguajes de programación más utilizado en la actualidad. Dominio de los fundamentos del lenguaje, con capacidad para crear diversas aplicaciones. Conocimiento en el uso de herramientas propias de JavaScript y casos prácticos de aplicación. Experiencia en el uso de librerías como jQuery y técnicas de desarrollo para aplicaciones modernas con AJAX. Capacidad para crear soluciones web interactivas y transferir los conocimientos adquiridos a cualquier framework de JavaScript.',

  },
  {
    avatar: Avt3,
    name: 'React Js',
    review: 'Capacitado en uno de los frameworks más populares y avanzados en la actualidad. Dominio de programación por componentes utilizando JavaScript, JS y ES6. Conocimiento en el manejo de flujos de datos y ventajas de su utilización. Experiencia en el manejo de rutas utilizando Firebase y comprensión del virtual DOM mediante el desarrollo de React JS. Capacidad para crear aplicaciones de página única (SPA) y realizar cualquier desarrollo utilizando React.',

  },

]

const Testimonials = () => {
  return (
    <section id='testimonials'>

      <h5>Certifications</h5>
      <h2>Front End Devs</h2>
      <Swiper className='container testimonials__container'   
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}      
      >
        
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className='client__avatar'>
                  <img src={avatar} alt="Avatar one" />
                </div>

                <h5 className='client__name'>{name} </h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }


      </Swiper>
    </section>
  )
}

export default Testimonials