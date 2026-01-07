import React from 'react';

const treatments = [
    { name: 'Dermatologie Estetică', desc: 'Soluții avansate pentru sănătatea pielii.' },
    { name: 'Remodelare Corporală', desc: 'Tehnologii non-invazive pentru sculptare.' },
    { name: 'Epilare Definitivă', desc: 'Laser de ultimă generație, rezultate permanente.' },
    { name: 'Tratamente Faciale', desc: 'Hidratare profundă și regenerare celulară.' },
];

const Services = () => {
    return (
        <section id="services" className="section container" style={{ paddingBottom: '6rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', marginLeft: '1rem' }}>TRATAMENTE</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0' }}>
                {treatments.map((item, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '2rem 1rem',
                        borderTop: '1px solid #333',
                        borderBottom: index === treatments.length - 1 ? '1px solid #333' : 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        transition: 'padding 0.3s'
                    }}
                        className="service-item"
                        onMouseEnter={(e) => {
                            e.currentTarget.style.paddingLeft = '2rem';
                            e.currentTarget.style.backgroundColor = '#111';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.paddingLeft = '0';
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        <span style={{ fontWeight: '500' }}>{item.name}</span>
                        <span style={{ fontSize: '1rem', color: '#a0a0a0' }}>{item.desc}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
