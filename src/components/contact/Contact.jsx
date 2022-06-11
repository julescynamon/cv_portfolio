import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
	const [matches, setMatches] = useState(
		window.matchMedia("(max-width: 600px)").matches,
	);

	useEffect(() => {
		window
			.matchMedia("(max-width: 600px)")
			.addEventListener("change", (e) => setMatches(e.matches));
	}, []);

	const form = useRef();
	const [validation, setValidation] = useState("");
	const [error, setError] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();
		

		emailjs
			.sendForm(
				"service_k4reqfk",
				"template_1iotgam",
				form.current,
				"e3gyO09a_liHF4gjW",
			)
			.then(
				(result) => {
					console.log(result.text);
					setValidation("Merci pour votre message !");
				},
				(error) => {
					console.log(error.text);
					setError("Une erreur est survenue, veuillez réessayer.");
				},
			);

		e.target.reset();
	};

	return (
		<section id='contact' className="contact">
			<h2>Contactez moi</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>julescweb@gmail.com</h5>
						<a
							href='mailto:julescweb@gmail.com'
							target='_blank'
							rel='noreferrer'
						>
							Envoyez moi un mail
						</a>
					</article>
					<article className='contact__option'>
						<AiOutlineLinkedin className='contact__option-icon' />
						<h4>Linkedin</h4>
						<h5>julesCweb</h5>
						<a
							href='https://www.linkedin.com/in/julescweb/'
							target='_blank'
							rel='noreferrer'
						>
							Envoyez moi un message
						</a>
					</article>
					<article className='contact__option'>
						<BsTelephone className='contact__option-icon' />
						<h4>Téléphone</h4>
						{matches ? (
							<a href='tel:+33749192633'>
								Cliquez içi pour appelez
							</a>
						) : (
							<h5>0749192633</h5>
						)}
					</article>
				</div>
				{/* fin de contact option */}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						placeholder='Votre Nom'
						name='name'
						required
					/>
					<input
						type='text'
						placeholder='Votre Email'
						name='email'
						required
					/>
					<textarea
						name='message'
						rows='7'
						placeholder='Écrivez votre message'
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Envoyez votre message
					</button>
					<p className='succesMessage'>{ validation }</p>
					<p className='errorMessage'>{ error }</p>
				</form>
			</div>
		</section>
	);
};

export default Contact;
