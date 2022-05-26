import React from 'react';
import './experiences.css';
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
	return (
		<section id='experiences'>
			<h5>Quels sont mes hard skills ?</h5>
			<h2>Mes expériences</h2>

			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3>Languages Front-End</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsFillPatchCheckFill />
							<h4>HTML</h4>
							<small className='text-light'>Junior</small>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill />
							<h4>CSS</h4>
							<small className='text-light'>Junior</small>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill />
							<h4>BOOTSTRAP</h4>
							<small className='text-light'>Junior</small>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill />
							<h4>SASS</h4>
							<small className='text-light'>Junior</small>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill />
							<h4>REACT</h4>
							<small className='text-light'>Junior</small>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill />
							<h4>VUEJS</h4>
							<small className='text-light'>Débutant</small>
						</article>
					</div>
				</div>
				{/* Fin du FrontEnd */}
				<div className='experience__backend'>
					<h3>Languages Back-End</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsFillPatchCheckFill />
							<h4>NODEJS</h4>
							<small className='text-light'>Junior</small>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill />
							<h4>MONGODB</h4>
							<small className='text-light'>Junior</small>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill />
							<h4>MYSQL</h4>
							<small className='text-light'>Junior</small>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience
