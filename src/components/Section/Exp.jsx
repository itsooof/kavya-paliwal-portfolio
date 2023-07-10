import React from "react";
import "../../styles/Exp.css";
import { BsPatchCheck } from "react-icons/bs";

const Exp = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h2>HTML</h2>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h2>CSS</h2>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h2>JavaScript</h2>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h2>Bootstrap</h2>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h2>R</h2>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h2>C++</h2>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h2>Matlab</h2>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h2>Neo4j</h2>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheck className="experience_details-icons" />
              <div>
                <h2>React</h2>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
