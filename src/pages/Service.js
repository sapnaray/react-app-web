import React, { useState } from 'react';
import Cards from './Cards';
import Card from '../cardData';


const Service = () => {
 const[cardItem ,setCardItem]=useState(Card)
    return (
        <>
        
        <Cards cardItem={cardItem}/>
            

        </>
    )
}

export default Service
