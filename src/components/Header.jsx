import React, { useState } from 'react';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header" style={{
            padding: '2rem 5%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 100
        }}>
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 101 }}>
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Kosa Beauty Labs" style={{ height: '70px', filter: 'brightness(0) invert(1)' }} />
            </div>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
                <ul style={{ display: 'flex', gap: '3rem', listStyle: 'none' }}>
                    <li><a href="#locations" className="nav-link">Locații</a></li>
                    <li><a href="#services" className="nav-link">Tratamente</a></li>
                    <li><a href="#about" className="nav-link">Concept</a></li>
                </ul>
            </nav>

            <div className="desktop-btn">
                <a href="#contact" className="btn" style={{ padding: '0.8rem 1.5rem', fontSize: '0.8rem' }}>Programează-te</a>
            </div>

            {/* Mobile Nav Toggle */}
            <button className="hamburger" onClick={toggleMenu} style={{ zIndex: 101, color: '#fff' }}>
                <div style={{
                    width: '30px',
                    height: '2px',
                    backgroundColor: isMenuOpen ? 'var(--color-green-accent)' : '#fff',
                    marginBottom: '6px',
                    transition: '0.3s',
                    transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
                }}></div>
                <div style={{
                    width: '30px',
                    height: '2px',
                    backgroundColor: isMenuOpen ? 'transparent' : '#fff',
                    marginBottom: '6px',
                    transition: '0.3s'
                }}></div>
                <div style={{
                    width: '30px',
                    height: '2px',
                    backgroundColor: isMenuOpen ? 'var(--color-green-accent)' : '#fff',
                    transition: '0.3s',
                    transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
                }}></div>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <nav>
                    <ul style={{ listStyle: 'none', textAlign: 'center', fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <li><a href="#locations" onClick={toggleMenu}>Locații</a></li>
                        <li><a href="#services" onClick={toggleMenu}>Tratamente</a></li>
                        <li><a href="#about" onClick={toggleMenu}>Concept</a></li>
                        <li><a href="#contact" onClick={toggleMenu} style={{ color: 'var(--color-green-accent)' }}>Programează-te</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
