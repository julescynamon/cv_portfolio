import React, { useState } from "react";
import "./portfolio.css";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import Projet1 from "../../assets/projet1.png";
import Projet2 from "../../assets/projet2.png";
import Projet3 from "../../assets/projet3.png";
import Projet4 from "../../assets/projet4.png";
import Projet5 from "../../assets/projet5.png";
import Projet6 from "../../assets/projet6.png";
import Projet7 from "../../assets/projet7.png";
import Projet8 from "../../assets/projet8.png";
import Projet9 from "../../assets/projet9.png";
import Projet10 from "../../assets/projet10.png";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
	{
		id: 1,
		image: Projet1,
		title: "Intégrer une maquette en HTML et CSS",
		github: "https://github.com/julescynamon/BoookiProject.github.io",
		demo: "https://julescynamon.github.io/BoookiProject.github.io/",
	},
	{
		id: 2,
		image: Projet2,
		title: "Dynamiser un site avec les animations SCSS",
		github: "https://github.com/julescynamon/CYNAMONJules_3_19102021",
		demo: " https://julescynamon.github.io/CYNAMONJules_3_19102021/",
	},
	{
		id: 3,
		image: Projet3,
		title: "Projet personel du jeux du morpion en JS",
		github: "https://github.com/julescynamon/JeuDuMorpion",
		demo: " https://julescynamon.github.io/JeuDuMorpion/",
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
		title: "Projet personel du Jeux Space Invader en JS",
		github: "https://github.com/julescynamon/SpaceInvaders",
		demo: "https://julescynamon.github.io/SpaceInvaders/",
	},
	{
		id: 8,
		image: Projet8,
		title: "Projet exercice site E-Commerce en React",
		github: "https://github.com/julescynamon/Ecommerce-react",
		demo: "https://julescynamon.github.io/Ecommerce-react/",
	},
	{
		id: 9,
		image: Projet9,
		title: "Projet exercice Pokédex en JS",
		github: "https://github.com/julescynamon/pokedexjs",
		demo: "https://julescynamon.github.io/pokedexjs/",
	},
	{
		id: 10,
		image: Projet10,
		title: "Créer le Front d'un site E-commerce en Javascript",
		github: "https://github.com/julescynamon/projetkanap",
		demo: "https://projetkanap.netlify.app",
	},
];

const Portfolio = () => {
	const [toggleTxt, setToggleTxt] = useState(false);

	const animation = useSpring({
		opacity: toggleTxt ? 1 : 0,
		transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
	});

	return (
		<section id='portfolio' className='container portfolio'>
			<h2 className='details'>Portfolio</h2>

			<Swiper
				modules={[Navigation, Pagination]}
				spaceBetween={53}
				navigation
				pagination={{ clickable: true }}
				breakpoints={{
					800: {
						slidesPerView: 2,
					},
					300: {
						slidesPerView: 1,
					},
				}}
				className=' portfolio__container'
			>
				{data.map(({ id, image, title, github, demo }) => {
					return (
						<SwiperSlide key={id} className='portfolio__item'>
							<div className='portfolio__item-image'>
								<img src={image} alt='' />
							</div>
							<h3>{title}</h3>
							<div className='portfolio__item-cta'>
								<a
									href={github}
									className='btn'
									target='_blank'
									rel='noreferrer'
								>
									Github
								</a>
								<a
									href={demo}
									className='btn btn-primary'
									target='_blank'
									rel='noreferrer'
								>
									Live Démo
								</a>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>

			<div className='btn-anchor'>
				<Waypoint
					bottomOffset='30%'
					onEnter={() => {
						if (!toggleTxt) {
							setToggleTxt(true);
						}
					}}
				/>
				<animated.div style={animation}>
					<a
						href='https://github.com/julescynamon'
						className='btn btn-primary btn-small'
						target='_blank'
						rel='noreferrer'
					>
						Pour plus de Projets GitHub cliquez içi !
					</a>
				</animated.div>
			</div>
		</section>
	);
};

export default Portfolio;
