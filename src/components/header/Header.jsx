import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Typewritter from "typewriter-effect";
import ParticlesBackground from "../../Utils/ParticlesBackground";




const Header = () => {
	return (
		<header id='header'>
			<div className='me'>
				<ParticlesBackground />
				<div className='container header__container'>
					<h1 className="colorChange">
						<Typewritter
							options={{
								autoStart: true,
								loop: true,
								delay: 40,
								strings: [
									"Bienvenue,",
									"Je suis Jules Cynamon,",
									"Web Developpeur.",
								],
							}}
						/>
					</h1>
					<CTA />
					<HeaderSocials />

					<a href='#contact' className='scroll__down'>
						bas de page
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
