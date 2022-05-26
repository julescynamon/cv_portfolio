import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
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
	);
};

export default HeaderSocials;
