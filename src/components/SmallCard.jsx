import React from 'react'

const SmallCard = (props) => {
  return (
    <div className='shadow-md group cursor-pointer transition-colors dark:hover:bg-blue-300/50 hover:bg-blue-500/60 grid grid-cols-2 justify-items-center gap-6 p-5 bg-blue-200 dark:bg-blue-400 text-blue-600 dark:text-white rounded-md'>
      
      <p className='justify-self-start text-blue-300 dark:text-blue-500 font-bold'>{props.text}</p>
      <img src={props.icon} alt="" className='justify-self-end' />
      <span className='justify-self-start font-extrabold text-2xl'>{props.number}</span>
      <span className={`flex gap-1 items-center justify-self-end ${props.stat.color == "green" ? "text-toogle-to" : "text-red"}`}>
        <img src={props.stat.icon} alt="" />
        <span>{props.stat.per}</span>
        </span>
    </div>
  )
}

export default SmallCard