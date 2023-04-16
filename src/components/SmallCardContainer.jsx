import React from 'react'
import SmallCard from './SmallCard'
import data from "../../data.json"

const SmallCardContainer = () => {
    return (

        <>
            <h3 className='mt-5 font-bold text-xl text-blue-300 dark:text-white'> Overview - Today </h3>
            <section className='my-5 grid xs:grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-4'>
                
                {
                    data[1].small_cards.map((card, index) => {
                        return (
                            <SmallCard key={index} text={card.text} icon={card.icon} number={card.number} stat={card.stat} color={card.stat.color}  />
                        )
                    })
                }
            </section>
        </>
    )
}

export default SmallCardContainer