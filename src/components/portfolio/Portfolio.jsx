import React, { useState } from "react";
import "./portfolio.css";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import data from "./data";

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
