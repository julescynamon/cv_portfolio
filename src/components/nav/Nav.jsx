import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {

	const [ activeNav, setActiveNav ] = useState('#header')

	return (
		<nav>
			<a
				href='#header'
				onClick={() => setActiveNav("#header")}
				className={activeNav === "#header" ? "active" : ""}
			>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a>
			<a
				href='#experiences'
				onClick={() => setActiveNav("#experiences")}
				className={activeNav === "#experiences" ? "active" : ""}
			>
				<BiBookAlt />
			</a>
			<a
				href='#services'
				onClick={() => setActiveNav("#services")}
				className={activeNav === "#services" ? "active" : ""}
			>
				<RiServiceLine />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
};

export default Nav;
