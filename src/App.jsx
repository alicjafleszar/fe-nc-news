import './App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
