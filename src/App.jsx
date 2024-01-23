import React from 'react'; // Import Link from react-router-dom
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Home Page</h1>
      </div>
      <Footer />
    </>
  );
};

export default App;
