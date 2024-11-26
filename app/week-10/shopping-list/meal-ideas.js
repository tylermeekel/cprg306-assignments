"use client";

const { useState, useEffect } = require("react");

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient
        const response = await fetch(url);

        const data = await response.json();

        if (data.meals === null) {
            return [];
        } else {
            return data.meals;
        }

    }

    async function loadMealIdeas() {
        let meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h1 className="font-bold text-2xl">Meal Ideas</h1>
            <ul className="flex gap-2 flex-col">
                {
                    meals.length > 0 && ingredient != "" ? 
                    meals.map((meal) => 
                        <li key={meal.strMeal} className="bg-slate-800 p-2 hover:bg-orange-800">{meal.strMeal}</li>
                    ) : "There are no meals for the ingredient " + ingredient
                }
            </ul>
        </div>
    );
}