import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('f'); //user input 
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () =>{
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)//user input append to the url
      const data = await response.json()
      const {drinks} = data
      if(drinks){
        //map through and return an object with drink detail using object destructuring
        const newCocktails = drinks.map((item)=>{
          const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
          return {
            id: idDrink, 
            name:strDrink, 
            image:strDrinkThumb, 
            info:strAlcoholic, 
            glass:strGlass}
        })
      setCocktails(newCocktails)
      }else{
        setCocktails([])
      }
      setLoading(false) // after the try block set loading back to false

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  //invoke fetchDrink method with useEffect everytime the use type something
  useEffect(()=>{
    fetchDrinks()
  },[searchTerm])

  
  return <AppContext.Provider value={{
    loading, cocktails, setSearchTerm
  }}>
    {children}
    </AppContext.Provider>
}





export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
