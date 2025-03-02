import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import SocialMediaLinks from './components/SocialMediaLinks';
import Footer from './components/Footer';
import './App.css'; // Main styling for the app

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <ProductList />
        <SocialMediaLinks />
      </main>
      <Footer />
    </div>
  );
};

export default App;
