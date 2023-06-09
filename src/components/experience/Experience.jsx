import React from "react";
import "./experience.css";
import { BsCheckCircle } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon"/>
              <div>
                <h4>JavaCript</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Boostrap</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon"/>
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
        {/*end of frontend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon"/>
              <div>
                <h4>CMongoDB</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsCheckCircle className="experience__details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
