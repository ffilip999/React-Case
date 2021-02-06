import React from 'react';
import './About.css';

function Contact() {
    return (
        <div className='wrapper'>
            <div className='contact-div'>
                <h1 className='head'>Contact information</h1>
                <p className='contact'>Email addres:</p> <a className='contact' href='#'>FIlip.norstrom@hotmail.se</a>
                <p className='contact'>Linkedin:</p><a className='contact' href='#'>Filip Norström</a>
            </div>
            <img className='img-dec' src='https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg'></img>
        </div>
    );
}

export default Contact;