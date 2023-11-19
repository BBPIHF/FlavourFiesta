import React from 'react'
import { useGlobalContext } from '../context'


const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = React.useRef('');

  const searchCocktail = () =>{
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  React.useEffect(()=>{
    searchValue.current.focus()
  })

  return (
    <section className="flex justify-center mt-20">
      <form className="" onSubmit={handleSubmit}>
        <div className="flex">
          <input type="text" id='name' placeholder='search here' ref={searchValue} onChange={searchCocktail}/> 
        </div>
      </form>
    </section>
  )
}

export default SearchForm
