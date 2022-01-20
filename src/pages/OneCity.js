import { useContext } from "react";
import { useParams } from "react-router";
import CoffeshopCard from "../components/CoffeeshopCard";
import CoffeeContext from "../utils/CoffeeContext";

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
