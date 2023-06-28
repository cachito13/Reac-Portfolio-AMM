//rafce
import React from "react";
import "./about.css";
import ME from "../../assets/100351987_804973687441210_7762280470729273506_n.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>projects</h5>
              <small>80+</small>
            </article>
          </div>
          <p>
            Benvenido, mi nombre es Adrian, te contare un poco sobre mi: 
            Soy un analista en sistemas con una sólida formación y experiencia en el campo de la tecnología. Durante los últimos 10 años, he adquirido conocimientos profundos en el análisis y desarrollo de sistemas, lo que me ha permitido entender las complejidades y desafíos de este campo en constante evolución.
            Recientemente, he ampliado mi expertise al convertirme en un desarrollador front-end altamente capacitado. Me gradué en Coderhouse, donde obtuve títulos en desarrollo web, JavaScript y React. Estas habilidades me han permitido crear interfaces de usuario atractivas y funcionales, con un enfoque en la experiencia del usuario y las mejores prácticas de diseño.
            Además, actualmente estoy cursando la carrera de backend en Coderhouse para complementar mis habilidades y poder ofrecer soluciones completas en el desarrollo de aplicaciones web. Esta búsqueda continua de conocimiento demuestra mi compromiso con el aprendizaje constante y mi deseo de mantenerme actualizado en las últimas tecnologías y tendencias del mercado.
            En mi sección de "Experiencia", encontrarás los enlaces a los repositorios de mis proyectos, donde podrás ver de primera mano mi capacidad para trabajar en equipo y aplicar mis habilidades técnicas en entornos prácticos. Estos proyectos me han brindado la oportunidad de enfrentar desafíos reales, trabajar en colaboración con otros profesionales y desarrollar soluciones innovadoras.
            Con una base sólida en el análisis de sistemas, habilidades front-end y en constante crecimiento en el desarrollo backend, me considero un profesional versátil y comprometido con la excelencia en mi trabajo. Estoy emocionado por aplicar mis conocimientos y habilidades en un entorno desafiante, donde pueda contribuir al éxito de proyectos y seguir evolucionando como desarrollador.
          </p>
          <div className="btn-container">
            <a href="#contact" className="btn btn_primary">
              Lets Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
