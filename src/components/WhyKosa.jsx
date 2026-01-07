import React from 'react';

const reasons = [
    { title: 'Standarde Premium', text: 'Servicii de excepție și atenție la fiecare detaliu.' },
    { title: 'Experți Dedicați', text: 'Echipă pasionată și instruită la cele mai înalte standarde.' },
    { title: 'Tehnologie Modernă', text: 'Echipamente performante pentru rezultate optime.' },
];

const WhyKosa = () => {
    return (
        <section id="about" className="section container" style={{ backgroundColor: '#111', padding: '6rem 3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>DE CE KOSA?</h2>
                    <p style={{ color: '#a0a0a0', maxWidth: '30ch' }}>Mai mult decât un salon, suntem partenerul tău de încredere în călătoria spre frumusețe.</p>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {reasons.map((reason, idx) => (
                        <div key={idx}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>{reason.title}</h3>
                            <p style={{ color: '#a0a0a0' }}>{reason.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyKosa;
