import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from '../../assets/me.png';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header id="header">
			<div className='container header__container'>
				<h5>Bonjour je suis</h5>
				<h1>Jules Cynamon</h1>
				<h5 className='text-light'>Developpeur Junior</h5>
				<CTA/>
				<HeaderSocials/>
				<div className="me">
					<img src={Me} alt="profil" />
				</div>

				<a href="#contact" className="scroll__down">bas de page</a>
			</div>
		</header>
	);
};

export default Header;
