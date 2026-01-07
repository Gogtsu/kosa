import React from 'react';

const locations = [
    { city: 'Târgoviște', address: 'Centrul Vechi', id: 'targoviste' },
    { city: 'Brașov', address: 'Zona Centru Civic', id: 'brasov' },
    { city: 'București', address: 'Primăverii', id: 'bucuresti' },
];

const Locations = () => {
    return (
        <section id="locations" className="section container">
            <div className="locations-header">
                <h2 style={{ fontSize: '2.5rem', marginLeft: '1rem' }}>LOCAȚII</h2>
                <p style={{ color: '#a0a0a0', marginLeft: '1rem' }}>Alege cel mai apropiat centru Kosa.</p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {locations.map((loc) => (
                    <div key={loc.id} style={{
                        padding: '3rem',
                        border: '1px solid #333',
                        transition: 'border-color 0.3s',
                        cursor: 'pointer'
                    }}
                        className="location-card"
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#fff'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{loc.city}</h3>
                        <p style={{ color: '#a0a0a0', marginBottom: '2rem' }}>{loc.address}</p>
                        <span style={{
                            textTransform: 'uppercase',
                            fontSize: '0.8rem',
                            letterSpacing: '0.1em',
                            borderBottom: '1px solid #fff',
                            paddingBottom: '0.5rem'
                        }}>Vezi Detalii &rarr;</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Locations;
