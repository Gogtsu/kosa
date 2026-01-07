import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Locations from './components/Locations';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import WhyKosa from './components/WhyKosa';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Header />

            <main>
                <Hero />
                <Locations />
                <Services />
                <Process />
                <Testimonials />
                <WhyKosa />
            </main>

            <Footer />
        </div>
    );
}

export default App;
