import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" style={{ borderTop: '1px solid #333', marginTop: '4rem', paddingBottom: '4rem', marginLeft: '1rem' }}>
            <div className="container section" style={{ textAlign: 'center', paddingBottom: '2rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>ÎNCEPE CĂLĂTORIA</h2>
                <p style={{ marginBottom: '3rem', color: '#a0a0a0' }}>Programează o consultație în cea mai apropiată locație.</p>
                <a href="#locations" className="btn" style={{ marginBottom: '6rem' }}>Alege Locația</a>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.9rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>&copy; {new Date().getFullYear()} Kosa Beauty Labs. Toate drepturile rezervate.</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
