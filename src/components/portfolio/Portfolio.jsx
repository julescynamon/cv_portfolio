import React from 'react';
import './portfolio.css';
import Projet1 from '../../assets/projet1.png';
import Projet2 from '../../assets/projet2.png';
import Projet3 from '../../assets/projet3.png';
import Projet4 from '../../assets/projet4.png';
import Projet5 from '../../assets/projet5.png';
import Projet6 from '../../assets/projet6.png';
import Projet7 from '../../assets/projet7.png';

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>Mon Travails</h5>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				<article className='portfolio__item'>
					<div className='portfolio__item-image'>
						<img src={Projet1} alt="" />
					</div>
						<h3>
							Transformez une maquette en site web avec HTML et
							CSS
						</h3>
						<a
							href='https://github.com/julescynamon/BoookiProject.github.io'
							className='btn'
						>
							Github
						</a>
						<a
							href='https://julescynamon.github.io/BoookiProject.github.io/'
							className='btn btn-primary'
						>Live Demo</a>
				</article>
			</div>
		</section>
	);
}

export default Portfolio
