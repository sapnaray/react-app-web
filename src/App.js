import React from 'react';
import Home from '../src/pages/Home'
import About from '../src/pages/About';
import Service from '../src/pages/Service';
import Contact from '../src/pages/Contact';
import Navbar from '../src/pages/Navbar';
import Footer from '../src/pages/Footer';
import{Routes,Route,Navigate} from 'react-router-dom';

const App=()=>{
  return(
    <>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/service' element={<Service/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Navigate to='/' replace />}/>
    </Routes>
    <Footer/>
    </>)
}
export default App