import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Recipes.css";

const Recipes = () => {
  // Updated Recipe Data (More Items + Realistic Images)
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      description: "A classic Italian pasta dish with creamy sauce.",
    },
    {
      id: 2,
      title: "Chocolate Cake",
      image: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
      description: "Delicious and moist chocolate cake with frosting.",
    },
    {
      id: 3,
      title: "Grilled Chicken Salad",
      image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      description: "Healthy and tasty grilled chicken with fresh greens.",
    },
    {
      id: 4,
      title: "Vegetable Stir Fry",
      image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      description: "A quick and easy vegetable stir fry with soy sauce.",
    },
    {
      id: 5,
      title: "Berry Smoothie",
      image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      description: "A refreshing berry smoothie with yogurt.",
    },
    {
      id: 6,
      title: "Margherita Pizza",
      image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
      description: "A simple yet delicious Margherita pizza with fresh basil.",
    },
  ]);

  return (
    <Container className="recipes-container mt-4">
      <h2 className="text-center">Explore Recipes</h2>
      <Row>
        {recipes.map((recipe) => (
          <Col key={recipe.id} xs={6} sm={4} md={3} className="mb-3">
            <Card className="recipe-card">
              <Card.Img variant="top" src={recipe.image} alt={recipe.title} />
              <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>{recipe.description}</Card.Text>
                <Link to={`/recipe/${recipe.id}`}>
                  <Button variant="primary" size="sm">
                    View Recipe
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Recipes;
