import React from "react";
import "./about.css";
import ImgCode from "../../assets/code.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { AiFillSchedule } from "react-icons/ai";

const About = () => {
	return (
		<section id='about'>
			<h2>À propos de moi</h2>

			<div className='container about__container about'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ImgCode} alt='ecran avec du code' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>
								1 ans de formation chez OpenClassrooms
							</small>
						</article>
						<a href='#portfolio' className='lienXP'>
							<article className='about__card'>
								<VscFolderLibrary className='about__icon' />
								<h5>Projets</h5>
								<small>
									Plus de 40 projets persos et école
								</small>
							</article>
						</a>
						<article className='about__card'>
							<AiFillSchedule className='about__icon' />
							<h5>Soft Kills</h5>
							<small>
								Adaptabilité, rigoureux, curieux, motivé{" "}
							</small>
						</article>
					</div>
					<p>
						Je me présente Jules Cynamon, j'ai 33 ans, en
						reconversion professionel, je viens d'obtenir mon
						diplôme de web développeur chez OpenClassrooms. Je souhaiterais trouver un emploi plus axé sur le développement Front-End. Mon
						adaptabilité, ma motivation, et ma persévérance sont des
						atouts qui je pense peuvent apporter un plus à votre
						équipe.
					</p>
					<a href='#contact' className='btn btn-primary'>
						Contactez-moi !
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
