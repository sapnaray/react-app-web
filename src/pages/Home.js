import React from 'react';
import website from '../image/homeimage.png';
import Common from './Common';
import About from './About';
import Service from './Service'
import Contact from './Contact'




const Home = () => {
    return (
        <>
        <Common 
        header="THIS IS ME"
        name="THAPA TECHNICAL"
        description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly
        used to demonstrate the visual"
        img={website}
        />
        <About/>
        <Service/>
        <Contact/>
            
        </>
    )
}
export default Home
