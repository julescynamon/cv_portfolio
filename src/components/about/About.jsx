import React from "react";
import "./about.css";
import ImgCode from "../../assets/code.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { AiFillSchedule } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h2>À propos de moi</h2>

      <div className="container about__container about">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ImgCode} alt="ecran avec du code" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiences</h5>
              <small>- 1 ans de formation chez OpenClassrooms</small>
              <br />
              <small>- 2 projets en freelance pour des clients locaux</small>
            </article>
            <a href="#portfolio" className="lienXP">
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projets</h5>
                <small>Plus de 60 projets persos et école</small>
              </article>
            </a>
            <article className="about__card">
              <AiFillSchedule className="about__icon" />
              <h5>Soft Kills</h5>
              <small>Adaptabilité, rigoureux, curieux, motivé </small>
            </article>
          </div>
          <p>
            Vous recherchez un développeur junior passionné et motivé pour
            intégrer votre équipe ? Je développe principalement en ReactJS et
            TypeScript, avec une forte inclination pour le clean code. Je suis
            également passionné par l'expérience utilisateur, l'UX/UI et le
            design. Je suis rapide à apprendre et dévoué à mes projets, et je
            suis prêt à mettre mes compétences au service de votre entreprise.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contactez-moi !
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
