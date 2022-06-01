import React from 'react';
import CV from '../../assets/cv.png'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn btn-cta'>Télécharger CV</a>
            <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
    )
}

export default CTA
