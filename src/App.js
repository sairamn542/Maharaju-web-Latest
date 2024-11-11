import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Section from './components/Section.jsx';
import Section2 from './components/Section2.jsx';
import Management from './components/management.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactHeader from './Pages/Contact/ContactHeader.jsx';
import ContactSection from './Pages/Contact/ContactSection.jsx';
import ContactMap from './Pages/Contact/ContactMap.jsx';
import Development from './Pages/Development/Development.jsx';
import CarouselSection from './components/Carousel.jsx';
import ServicePage from './Pages/services/Service.jsx';
import FourCards from './Pages/AboutUs/Card.jsx';
import AboutHeader from './Pages/AboutUs/AboutHeader.jsx';
import MainOne from './Pages/AboutUs/MainOne.jsx';
import Video from './Pages/AboutUs/Video.jsx';
import ThreeCards from './Pages/AboutUs/ThreeCard.jsx';
import DigitalMarketingPage from './Pages/Marketing/Marketing.jsx';
import Features from './Pages/Career/Feature.jsx';
import CareersPage from './Pages/Career/Career.jsx';
import CareeerFooter from './Pages/Career/CareeerFooter.jsx';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <CarouselSection />
            <Section />
            <Section2 />
            <Management />
          </>
        } />
        <Route path='/contact' element={
          <>
            <ContactHeader />
            <ContactSection />
            <ContactMap />
          </>
        } />
        <Route path='/development' element={
          <>
            <Development />
          </>
        } />
        <Route path='/marketing' element={
          <>
            <DigitalMarketingPage />
          </>
        } />
        <Route path='/services' element={
          <>
            <ServicePage />
          </>
        } />
        <Route path='/career' element={
          <>
            <CareersPage />
            <Features />
            <CareeerFooter />
          </>
        } />
        <Route path='/about' element={
          <>
            <AboutHeader />
            <MainOne />
            <Video />
            <FourCards />
            <ThreeCards />
          </>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
