import React from 'react'
import BigCard from './BigCard';
import data from "../../data.json";


const BigCardContainer = () => {

    return (
        <>
            <div className="mb-6 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {
                data[0].big_cards.map((card, index) => {
                    return (
                            <BigCard key={index} icon={card.social_icon} name={card.username} followers={card.followers} stat={card.stat} text={card.text} />
                    )
                })
            }
            </div>
        </>
    )
}

export default BigCardContainer;
