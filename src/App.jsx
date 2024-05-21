import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Carrousel from './components/carousell';
import './index.css';
function App() {
 return (
 <div>
 <Header />
 <Navigation />
 <main>
 <Catalog />
 </main>
 <h1>Mi Carrusel con Swiper</h1>
      <Carrousel />
 <Footer />
 </div>
 );
}
export default App;