import React from 'react';
import './About.css';

function About() {
    return (
        
        <div className="about-wrapper">
            <div className="about-me">
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis purus nunc, mollis ut tempus in, imperdiet at leo. Donec rhoncus lacus quis fermentum porttitor. Nulla nec magna faucibus, varius magna at, auctor odio. Fusce gravida ultrices ante et finibus. Nunc tincidunt tellus quis leo suscipit, sit amet dictum nulla sodales. Nullam bibendum metus velit, in sagittis dui finibus a. In vulputate, nulla eget gravida posuere, tellus lorem vestibulum metus, at dignissim augue diam eget lectus. Vestibulum vehicula nunc ac ultricies porttitor. Sed dignissim quis dui sed egestas. Praesent facilisis eleifend laoreet. Aliquam quis dignissim magna. Sed volutpat metus non dapibus viverra. Sed eu imperdiet lorem, in placerat ex.</li>
                    <br></br>
                    <li>Maecenas nibh arcu, venenatis nec varius at, tincidunt fringilla dui. Integer vitae nisi a nisl interdum faucibus aliquam sed ipsum. Pellentesque mollis diam condimentum, varius eros vehicula, dapibus nibh. Fusce sed egestas lacus. Aliquam sed nisi quam. Proin ultricies rutrum lorem, nec aliquet ex gravida quis. Duis purus lectus, aliquet eu volutpat in, luctus eu sapien. In malesuada, velit at sodales vulputate, lorem metus condimentum nulla, tempor finibus mauris libero sit amet ex. Ut pretium odio non nisl tristique, id rutrum mauris commodo. Sed faucibus ipsum sit amet dolor tristique maximus. Fusce mattis sagittis felis, et blandit lorem rutrum nec. Donec imperdiet maximus dolor, vitae finibus ex sagittis eu. Curabitur vehicula lorem eget purus congue, at aliquet dolor pulvinar. Morbi id tempor augue, ut bibendum enim. Phasellus id porttitor lacus, ac suscipit justo.</li>
                </ul>
            </div>
            <div className="img-container">
                <img className="img-me" src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"></img>
            </div>
        </div>
    );
}

export default About;