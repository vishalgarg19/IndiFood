import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Masala Chap",
    description: "spicy and veggies",
    price: 229.99,
  },
  {
    id: "m2",
    name: "Paneer Tikka",
    description: "A Indian specialty!",
    price: 199.99,
  },
  {
    id: "m3",
    name: "KFC Chap",
    description: "fried With Green souce",
    price: 149.99,
  },
  {
    id: "m4",
    name: "Afghani Chap",
    description: "A Test from Afgaan",
    price: 189.99,
  },
  {
    id: "m5",
    name: "Achaari Chaap ",
    description: "Test of Pickle",
    price: 199.99,
  },
  {
    id: "m6",
    name: "Malai Chaap  ",
    description: "Creamy and Less Spicy",
    price: 199.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
