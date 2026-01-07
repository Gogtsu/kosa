import React from 'react';

const steps = [
    { id: '01', title: 'Consult', desc: 'Discuție personalizată despre obiectivele tale.' },
    { id: '02', title: 'Tratament', desc: 'Proceduri premium adaptate nevoilor tale.' },
    { id: '03', title: 'Rezultat', desc: 'Îngrijire continuă pentru o frumusețe de durată.' },
];

const Process = () => {
    return (
        <section className="section container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>EXPERIENȚA KOSA</h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
            }}>
                {steps.map((step) => (
                    <div key={step.id} style={{
                        backgroundColor: '#111',
                        padding: '3rem',
                        position: 'relative',
                        borderTop: '2px solid var(--color-green-dark)'
                    }}>
                        <span style={{
                            fontSize: '4rem',
                            fontWeight: '700',
                            color: 'var(--color-green-dark)',
                            opacity: 0.5,
                            position: 'absolute',
                            top: '1rem',
                            right: '2rem'
                        }}>{step.id}</span>

                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{step.title}</h3>
                        <p style={{ color: '#a0a0a0' }}>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
