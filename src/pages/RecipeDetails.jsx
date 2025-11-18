import { useParams } from "react-router-dom";
import apiData from "../api/api.json";
import "./RecipeDetails.css";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = apiData.find((item) => item.id === Number(id));

  if (!recipe) return <h2>Recipe Not Found</h2>;

  return (
    <div className="detail-container">
      <img src={recipe.image} className="detail-img" alt={recipe.name} />

      <div className="detail-content">
        <h1>{recipe.name}</h1>
        <p className="detail-meta">
          Cuisine: <strong>{recipe.cuisine}</strong> | 
          Difficulty: <strong>{recipe.difficulty}</strong> |
          Rating: ⭐ {recipe.rating}
        </p>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        <h3>Additional Info</h3>
        <p>Prep Time: {recipe.prepTimeMinutes} mins</p>
        <p>Cook Time: {recipe.cookTimeMinutes} mins</p>
        <p>Servings: {recipe.servings}</p>
      </div>
    </div>
  );
}
