import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="sec aboutus">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum optio ratione quam alias dolorem voluptatem molestiae officia, ipsum ea odio nam consequatur itaque eos ex aspernatur, earum temporibus doloribus est.</p>

                    <ul className='sci'>
                        <li><a href="">f</a></li>
                        <li><a href="">t</a></li>
                        <li><a href="">y</a></li>
                        <li><a href="">ins</a></li>

                    </ul>
                </div>
                <div className="sec quickLinks">
                <h2>Quick Links</h2>
                <ul >
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Helps</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact</a></li>

                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;