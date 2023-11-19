import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext();
  if(loading){
    return <Loading/>
  }

  if(cocktails.length<1){
    return <h2 className='section-title'>
      no cocktail match your search
    </h2>
  }
  return (
    <section className="">
      <h2 className="text-center text-3xl font-bold text-secondary my-8">
        cocktail
      </h2>
      <div className="cocktails-center px-5 md:px-20">
        {cocktails.map((item)=>{
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
  
    </section>
  )
}

export default CocktailList
