import React, { useEffect, useState } from 'react'
import './RecipeApp.css'
import Recipe from './Recipe'

const RecipeApp = () => {
    const APP_ID = '42b363ce'
    const APP_KEY = '18af1b8c949b97911bea7e32438d0b53'


    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState('chicken')


    useEffect(() => {
        getRecipes()
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()

        setRecipes(data.hits)

    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch("")
    }

    return (
        <div className="RecipeApp">
            <form onSubmit={getSearch} className="search-from">
                <input className="search-bar" type='text' value={search} onChange={updateSearch} />
                <button className="search-button" type='submit'>Search</button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipe
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </ div>
    )
}

export default RecipeApp