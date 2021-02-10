import React from 'react';
import './About.css';

function Contact() {
    return (
        <div className='wrapper'>
            <div className='contact-div'>
                <h1 className='head'>Contact information</h1>
                <p className='email'>Email addres:</p> <p className='contact' href='#'>FIlip.norstrom@hotmail.se</p>
                <a className='contact' href='https://www.linkedin.com/in/filip-norstr%C3%B6m-a3228a204/'>Linkedin</a>
                <a className='contact' href='https://github.com/ffilip999'>Github</a>
            </div>
            <img className='img-dec' src='https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg'></img>
        </div>
    );
}

export default Contact;