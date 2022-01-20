import { useContext } from "react";
import { Link } from "react-router-dom";
import CoffeeContext from "../utils/CoffeeContext";

function CityCard() {
  const { cities } = useContext(CoffeeContext);

  return (
    <>
      <h1 id="citytop">Cities</h1>

      <div class="cards">
        {cities.map((city) => (
          <div class="card">
            <img src={city.image} class="card__image" />
            <div class="card__content">
              <div class="card__title">{city.nameOfCity}</div>
              <Link to={`/city/${city._id}`} class="citybtn">
                <h6>See CAFE</h6>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CityCard;
