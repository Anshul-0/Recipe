import apiData from "../api/api.json";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1 className="page-title">Discover Delicious Recipes</h1>

      <div className="grid-container">
        {apiData.map((recipe) => (
          <div className="card" key={recipe.id}>
            <img src={recipe.image} className="card-img" alt={recipe.name} />

            <div className="card-body">
              <h2 className="card-title">{recipe.name}</h2>

              <p className="desc">
                {Array.isArray(recipe.instructions)
                  ? recipe.instructions[0].slice(0, 70) + "..."
                  : "No description"}
              </p>

              <p className="card-meta">
                <span>{recipe.cuisine}</span> • 
                <span>{recipe.difficulty}</span> • 
                <span>⭐ {recipe.rating}</span>
              </p>

              <Link to={`/recipe/${recipe.id}`} className="read-more">
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
