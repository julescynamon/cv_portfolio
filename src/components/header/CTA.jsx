import React from 'react';
import CV from '../../assets/cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV}>Télécharger CV</a>
            <a href="#contact">Contact</a>
        </div>
    )
}

export default CTA
