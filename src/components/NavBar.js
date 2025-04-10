import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            <div className="links">
                <a 
                    href="#home" 
                    className={activeSection === 'home' ? 'active' : ''}
                    onClick={(e) => handleClick(e, 'home')}
                >
                    Home
                </a>
                <a 
                    href="#about" 
                    className={activeSection === 'about' ? 'active' : ''}
                    onClick={(e) => handleClick(e, 'about')}
                >
                    About Me
                </a>
                <a 
                    href="#projects" 
                    className={activeSection === 'projects' ? 'active' : ''}
                    onClick={(e) => handleClick(e, 'projects')}
                >
                    Projects
                </a>
            </div>
        </nav>
    );
}

export default NavBar;