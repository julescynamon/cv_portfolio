import React from "react";
import './footer.css';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";

const Footer = () => {

	return (
		<footer>
			<div className='footer__socials'>
				<a
					href='https://www.linkedin.com/in/jules-cynamon-344569221/'
					target='_blank'
					rel='noreferrer'
				>
					<BsLinkedin />
				</a>
				<a
					href='https://github.com/julescynamon'
					target='_blank'
					rel='noreferrer'
				>
					<FaGithub />
				</a>
				<a
					href='https://codepen.io/trending'
					target='_blank'
					rel='noreferrer'
				>
					<SiCodepen />
				</a>
			</div>
				<small className='footer__copyright'>
					&copy; Copyright 2022 - Jules Cynamon. Tous droits réservés.
				</small>
		</footer>
	);
}

export default Footer
