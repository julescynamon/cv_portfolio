import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Typewritter from "typewriter-effect";



const Header = () => {
	return (
		<header id='header'>
			<div className='me'>
				<div className='container header__container'>
					<h1>
						<Typewritter
							options={{
								autoStart: true,
								loop: true,
								delay: 40,
								strings: [
									"Bienvenue,",
									"Je suis Jules Cynamon,",
									"Web Developpeur Junior.",
								],
							}}
						/>
					</h1>
					<CTA />
					<HeaderSocials />

					{/* <img src={Me} alt='profil' /> */}

					<a href='#contact' className='scroll__down'>
						bas de page
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
