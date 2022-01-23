import { Link } from "react-router-dom";

function CoffeshopCard(props) {
  const { coffeeShope } = props;
  if (!coffeeShope) return <div className="loader"></div>;
  return (
    <>
      <div>
        <Link to={`/coffeeShope/${coffeeShope._id}`}>
          <img src={coffeeShope.image} alt="Card image" class="cafe-img" />
        </Link>
        
      </div>



    </>
  );
}

export default CoffeshopCard;
