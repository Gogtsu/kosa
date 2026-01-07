import React from 'react';

const reviews = [
    { name: 'Ana M.', text: 'Profesionalism desăvârșit. Rezultatele au fost vizibile după prima ședință.' },
    { name: 'Elena D.', text: 'O experiență premium. Personalul este extrem de bine pregătit.' },
    { name: 'Ioana S.', text: 'Tehnologie de ultimă oră și o atmosferă foarte relaxantă.' },
];

const Testimonials = () => {
    return (
        <section className="section" style={{ backgroundColor: 'var(--color-green-dark)', color: '#fff' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem' }}>REZULTATE REALE</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem'
                }}>
                    {reviews.map((review, idx) => (
                        <div key={idx} style={{
                            borderLeft: '1px solid var(--color-green-accent)',
                            paddingLeft: '1.5rem'
                        }}>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem' }}>"{review.text}"</p>
                            <span style={{
                                color: 'var(--color-green-accent)',
                                textTransform: 'uppercase',
                                fontSize: '0.8rem',
                                letterSpacing: '0.1em'
                            }}>{review.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
