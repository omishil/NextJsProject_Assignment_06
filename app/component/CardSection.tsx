import React from 'react';
import Card from './Card';
const CardSection = async() => {


    const res= await fetch('https://api.abcz.workers.dev/api/fitlog')
    const cards=await res.json()

    return (
        <div className='grid grid-cols-3 gap-5 px-6 sm:px-8 md:px-12 py-12 sm:py-16'>
          {  cards.map((card)=>

<Card key={card.id} card={card}></Card>

)}
        </div>
    );
};

export default CardSection;