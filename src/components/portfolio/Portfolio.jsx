import React from 'react';
import './portfolio.css';
import Projet1 from '../../assets/projet1.png';
import Projet2 from '../../assets/projet2.png';
import Projet3 from '../../assets/projet3.png';
import Projet4 from '../../assets/projet4.png';
import Projet5 from '../../assets/projet5.png';
import Projet6 from '../../assets/projet6.png';
import Projet7 from '../../assets/projet7.png';


const data = [
	{
		id: 1,
		image: Projet1,
		title: "Projet 2 de la formation Openclassrooms",
		github: "https://github.com/julescynamon/BoookiProject.github.io",
		demo: "https://julescynamon.github.io/BoookiProject.github.io/",
	},
	{
		id: 2,
		image: Projet2,
		title: "Projet 3 de la formation Openclassrooms",
		github: "https://github.com/julescynamon/CYNAMONJules_3_19102021",
		demo: " https://julescynamon.github.io/CYNAMONJules_3_19102021/",
	},
	{
		id: 3,
		image: Projet3,
		title: "Projet personel de Site d'annonce",
		github: "https://github.com/julescynamon/siteD-annonce",
		demo: " https://julescynamon.github.io/siteD-annonce/",
	},
	{
		id: 4,
		image: Projet4,
		title: "Projet personel de site d'annonces immobilières",
		github: "https://github.com/julescynamon/AgenceImmobili-re",
		demo: "https://julescynamon.github.io/AgenceImmobili-re/",
	},
	{
		id: 5,
		image: Projet5,
		title: "Projet personel de site pour une salle de sport",
		github: "https://github.com/julescynamon/Site-de-salle-de-sport",
		demo: "https://julescynamon.github.io/Site-de-salle-de-sport/",
	},
	{
		id: 6,
		image: Projet6,
		title: "Projet personel de visualiseur audio en JS",
		github: "https://github.com/julescynamon/visualiseurAudio",
		demo: "https://julescynamon.github.io/visualiseurAudio/",
	},
	{
		id: 7,
		image: Projet7,
		title: "Projet personel du Jeux Space Invader",
		github: "https://github.com/julescynamon/SpaceInvaders",
		demo: "https://julescynamon.github.io/SpaceInvaders/",
	},
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>Mon Travails</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className='portfolio__item'>
							<div className='portfolio__item-image'>
								<img src={image} alt='' />
							</div>
							<h3>
								{title}
							</h3>
							<div className='portfolio__item-cta'>
								<a
									href= {github}
									className='btn'
									target='_blank'
									rel='noreferrer'
								>
									Github
								</a>
								<a
									href= {demo}
									className='btn btn-primary'
									target='_blank'
									rel='noreferrer'
								>
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default Portfolio
