import React from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardDetail from './Components/CardDetail';
import CoinCard from './Components/CoinCard';
import Footer from './Components/Footer';
import CoinContainer from './Components/CoinContainer';
import WhyUs from './Components/WhyUs';
import Portfolio from './Components/Portfolio';
import Faq from './Components/Faq';
import HeroSection from './Components/HeroSection';



const App = () => {
  return (
    <Router>
    <Navbar/>
    
    <Routes>
   <Route path='/' element={<HeroSection/>}/> 
   <Route path='/whyus' element={<WhyUs/>}/> 
   <Route path='/portfolio' element={<Portfolio/>}/> 
   <Route path='/faq' element={<Faq/>}/> 
    <Route path='/coincard' element={<CoinCard/>}/>
    <Route path='/carddetail' element={<CardDetail/>}/>

    <Route path='/coincontainer' element={<CoinContainer/>}/>
    <Route path='/learnmore/:ID' element={<CardDetail/>}/>
    </Routes>
    
    <ToastContainer/>
    <Footer/>
      
    </Router>
  )
}

export default App;
