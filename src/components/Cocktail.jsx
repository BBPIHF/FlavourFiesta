import React from 'react'
import { Link } from 'react-router-dom'


const Cocktail = ({image, name, id, info, glass}) => {
  return (
     <article className="cocktail-container">
        <img src={image} alt={name} />
      <div className="p-2">
        <h3 className='text-md font-bold'>{name}</h3>
        <h4 className=''>{glass}</h4>
        <p className='text-gray-600'>{info}</p>
        <Link to={`/cocktail/${id}`} className='bg-secondary p-2 text-white hover:opacity-90 flex justify-center'> details </Link>
      </div>
     </article>
  )
}

export default Cocktail
