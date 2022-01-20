import { useContext } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CoffeshopCard from "../components/CoffeeshopCard";
import CoffeeContext from "../utils/CoffeeContext";
import Follows from "./Follows";

function OneCity() {
  const { cityId } = useParams();
  const { cities } = useContext(CoffeeContext);

  if (cities.length === 0) return <div className="loader"></div>;

  const cityfound = cities.find((c) => c._id === cityId);
  console.log(cityfound);

  return (
    <>
      <h1 className="cafetitle">{cityfound.nameOfCity} CAFE</h1>

      <div className="cafe">
        {cityfound.coffeeshopes.map((coffeeShope) => (
          <>
            <CoffeshopCard coffeeShope={coffeeShope} />
          </>
        ))}
      </div>
    </>
  );
}

export default OneCity;
