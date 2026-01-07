import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: -1000, y: -1000 };

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;

            particles = [];
            const particleCount = Math.floor((width * height) / 15000);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                    baseX: Math.random() * width,
                    baseY: Math.random() * height,
                    density: (Math.random() * 30) + 1
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                // Movement
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse interaction
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 200;
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxForce = 15;
                const force = (maxDistance - distance) / maxDistance;
                const directionX = forceDirectionX * force * p.density;
                const directionY = forceDirectionY * force * p.density;

                if (distance < maxDistance) {
                    p.x -= directionX;
                    p.y -= directionY;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(203, 242, 104, ${0.2 * (1 - distance / maxDistance)})`; // using lab green accent
                    ctx.lineWidth = 1;
                    ctx.stroke();
                } else {
                    if (p.x !== p.baseX) {
                        const dx = p.x - p.baseX;
                        p.x -= dx / 20;
                    }
                    if (p.y !== p.baseY) {
                        const dy = p.y - p.baseY;
                        p.y -= dy / 20;
                    }
                }

                // Draw particle
                ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

            });

            requestAnimationFrame(animate);
        };

        const handleResize = () => init();
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 1rem',
            backgroundColor: '#0a0a0a',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none'
                }}
            />

            <div style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
                <h2 style={{
                    fontSize: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3em',
                    marginBottom: '1.5rem',
                    opacity: 0.8
                }}>Kosa Beauty</h2>
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    lineHeight: 1.1,
                    marginBottom: '2rem',
                    maxWidth: '15ch'
                }}>
                    FRUMUSEȚE,<br />REDEFINITĂ.
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    color: '#a0a0a0',
                    marginBottom: '3rem',
                    maxWidth: '40ch'
                }}>
                    Experiență premium și rezultate vizibile. Redescoperă-ți frumusețea naturală în centrele noastre.
                </p>
            </div>

            <div style={{ position: 'relative', zIndex: 2, display: 'flex', gap: '1.5rem' }}>
                <a href="#locations" className="btn" style={{ pointerEvents: 'auto' }}>Alege Locația</a>
            </div>
        </section>
    );
};

export default Hero;
