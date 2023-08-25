import React from 'react';
import Common from './Common';
import website from '../image/social media.gif';

const About = () => {
  return (
    <>
    <h3 className="text-center mt-2 p-3 text-white">About Page</h3>
    <Common
    header="THIS IS ME"
    name="VINOD THAPA"
    description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly
    used to demonstrate the visual"
    img={website}
    />
      
    </>
  )
}

export default About
