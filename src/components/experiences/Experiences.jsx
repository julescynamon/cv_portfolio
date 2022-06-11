import React from 'react';
import './experiences.css';
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
	return (
		<section id='experiences' className="experience">
			<h2>Mes hards skills</h2>

			<div className='container experience__container'>
				<div className='experience__frontend'>
					<h3>Languages Front-End</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>HTML</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>CSS</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>BOOTSTRAP</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>SASS</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>REACT</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>VUEJS</h4>
								<small className='text-light'>Débutant</small>
							</div>
						</article>
					</div>
				</div>
				{/* Fin du FrontEnd */}
				<div className='experience__backend'>
					<h3>Languages Back-End</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>NODEJS</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>MONGODB</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>MYSQL</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>API REST</h4>
								<small className='text-light'>Junior</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Experience
