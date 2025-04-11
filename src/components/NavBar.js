import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const NavBar = () => {
    const handleClick = (e, section) => {
        e.preventDefault();
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <h1>Jerome Taruc</h1>
            <div className="section-links">
                <a 
                    href="#home" 
                    onClick={(e) => handleClick(e, 'home')}
                >
                    Home
                </a>
                <a 
                    href="#about" 
                    onClick={(e) => handleClick(e, 'about')}
                >
                    About Me
                </a>
                <a 
                    href="#projects" 
                    onClick={(e) => handleClick(e, 'projects')}
                >
                    Projects
                </a>
            </div>
            <div className="social-links">
                <a 
                    href="https://github.com/jerome-taruc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <GitHubIcon />
                </a>
                <a 
                    href="https://www.linkedin.com/in/jerome-taruc/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon />
                </a>
            </div>
        </nav>
    );
}

export default NavBar;