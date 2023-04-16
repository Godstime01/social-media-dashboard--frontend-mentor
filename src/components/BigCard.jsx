import React from 'react'

const BigCard = (props) => {

  let borderColor = "";

  switch (props.index) {
    case 0:
      borderColor = "before:bg-facebook"
      break;
    case 1:
      borderColor = "before:bg-twitter"
      break;
    case 2:
      borderColor = "before:bg-gradient-to-r before:from-instagram-from before:to-instagram-to"
      break;
    case 3:
      borderColor = "before:bg-red"
      break;
    default:
      break;
  }

  console.log(borderColor)
  return (
    <div className={` relative p-5 group cursor-pointer transition-colors dark:hover:bg-blue-300/50  shadow-md rounded-md bg-blue-200 hover:bg-blue-500/60 dark:bg-blue-400 dark:text-white flex flex-col items-center text-center gap-3 before:w-full before:absolute before:top-0 before:h-1 overflow-hidden ${borderColor} `} >
      <div className="inline-flex items-center gap-2">
        <img src={props.icon} alt="" />
        <span className='text-md font-bold text-blue-300 dark:text-blue-500'>{props.name}</span>
      </div>

      <div className='my-3'>
        <h2 className='font-extrabold text-5xl text-blue-400 dark:text-blue-100 mb-2'>{props.followers}</h2>
        <p className='font-thin tracking-[.5rem] dark:text-blue-500 uppercase '>{props.text ? props.text : "FOLLOWERS"}</p>
      </div>

      <div className={`inline-flex gap-2 items-center ${props.stat.color == "green" ? 'text-toogle-to' : 'text-red'}`}>
        <img src={props.stat.icon} alt="" />
        <span>{props.stat.number}</span>
      </div>

    </div>
  )
}

export default BigCard;