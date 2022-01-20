import { useContext } from "react";
import { Link } from "react-router-dom";
import CoffeeContext from "../utils/CoffeeContext";

function Follows() {
  const { profile } = useContext(CoffeeContext);

  return (
    <>
      <div className="follow-profile">
        <h1 className="followh1">Following</h1>
        {profile?.follows?.map((follow) => (
          <>
            <Link to={`/coffeeShope/${follow._id}`}>
              <img src={follow.image} />
            </Link>
            <h3>{follow.name}</h3>
          </>
        ))}
      </div>
    </>
  );
}

export default Follows;
