import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p>© 2024 Garrett West. All rights reserved.</p>
            <div className="footer-links">
                <a href="https://github.com/garrett-west13" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
                </a>
                <a href="https://linkedin.com/in/garrett-west-8454b8310
" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
                </a>
            </div>
        </footer>
    );
}
