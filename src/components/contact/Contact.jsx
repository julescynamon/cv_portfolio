import React, { useRef, useState, useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
	const [errorMessage, setErrorMessage] = useState("");

	const defaultValues = {
		name: "",
		email: "",
		message: "",
	};

	const contactSchema = yup.object({
		name: yup.string().required("Le nom est requis").min(2, "Le nom est trop court"),
		email: yup.string().required("L'email est requis").email("l'email est invalid"),
		message: yup.string().required("Le message est requis").min(5, "Le message est trop court"),
	})

	const {
		formState: { errors, isSubmitting },
		register,
		handleSubmit,
		reset,
		clearErrors,
	} = useForm({
		defaultValues,
		resolver: yupResolver(contactSchema),
	});

	async function submit(values) {
		try {
			clearErrors();
			emailjs
			.sendForm(
				"service_k4reqfk",
				"template_1iotgam",
				form.current,
				"e3gyO09a_liHF4gjW",
			)
			.then(
				(result) => {
					reset(defaultValues);
					setValidation("Merci pour votre message !");
				},
				(error) => {
					setErrorMessage("Une erreur est survenue, veuillez réessayer.");
				},
			);
		} catch (error) {
			setErrorMessage("Une erreur est survenue, veuillez réessayer.");
		}
	}


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
				<form ref={form} onSubmit={handleSubmit(submit)}>
					<input
						{ ...register("name") }
						type='text'
						placeholder='Votre Nom'
						name='name'
						required
					/>
					{errors.name && <p className="errorMessage">{ errors.name.message }</p>}
					<input
						{ ...register("email") }
						type='text'
						placeholder='Votre Email'
						name='email'
						required
					/>
					{errors.email && <p className="errorMessage">{ errors.email.message }</p>}
					<textarea
						{ ...register("message") }
						name='message'
						rows='7'
						placeholder='Écrivez votre message'
						required
					></textarea>
					{errors.message && <p className="errorMessage">{ errors.message.message }</p>}
					<button disabled={isSubmitting} className='btn btn-primary'>
						Envoyez votre message
					</button>
					<p className='succesMessage'>{ validation }</p>
					<p className='errorMessage'>{ errorMessage }</p>
				</form>
			</div>
		</section>
	);
};

export default Contact;
