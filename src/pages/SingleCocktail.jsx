import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(()=>{
    setLoading(true);
    const getCocktail = async() =>{
      setLoading(true);
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json();
        if(data.drinks){
          const {strDrink:name, 
            strDrinkThumb:image,
            strAlcoholic:info,
            strCategory:category,
            strGlass:glass,
            strInstructions:instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]

          const newCocktail = {
            name,
             image,
             info,
             category,
             instructions,
             ingredients,
             glass
          }
          setCocktail(newCocktail)
        }else{
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail();
  },[id])

    if(!cocktail){
      return <h2> no cocktail to display</h2>
    }
    const  {name, image, category, info, glass, instructions, ingredients} = cocktail

  
  return (
    
    <section className="section cocktail-section mt-10">
      <div className='text-center '>
        <Link to="/" className='bg-secondary p-3 text-white hover:opacity-90' >
          back home
        </Link>
      </div>
      <h2 className="text-center text-3xl py-10 font-bold">{name}</h2>
      <div className="drink">
        <div className="img-container">
          <img src={image} alt={name} className='about-img' />
        </div>

        <table className='table-fixed'>
        <thead>
            <tr>
                <th>Data</th>
                <th>Detail</th>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>name</td>
                <td>{name}</td>
            </tr>
            <tr>
                <td>category</td>
                <td>{category}</td>
            </tr>
            <tr>
                <td>info</td>
                <td>{info}</td>
            </tr>
            <tr>
                <td>glass</td>
                <td>{glass}</td>
            </tr>
            <tr>
                <td>instructions</td>
                <td>{instructions}</td>
            </tr>
            <tr>
                <td>ingredients</td>
                <td>{ingredients.map((item, index)=>{
              return item? <span key={index}>{item}</span>:null
            })}</td>
            </tr>
        </tbody>
    </table>

      </div>
    </section>
  )
}

export default SingleCocktail
