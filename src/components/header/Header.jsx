import React from "react";
import "./header.css";

const Header = () => {
	return (
		<header>
			<div className='container header__container'>
				<h5>Bonjour je suis</h5>
				<h1>Jules Cynamon</h1>
				<h5 className='text-light'>Developpeur Junior</h5>
			</div>
		</header>
	);
};

export default Header;
