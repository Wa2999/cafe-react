import { useContext, useState } from "react";
import { useParams } from "react-router";
import CoffeeContext from "../utils/CoffeeContext";
import Review from "../components/Review";
import { Link } from "react-router-dom";
import img3 from "../img/img6.webp";
import FollowModal from "../components/FollowModal";

function OneCoffeeShop() {
  const { coffeeShopId } = useParams();
  const [show, setShow] = useState(false);
  const { profile, cafes, followcafe } = useContext(CoffeeContext);

  if (cafes.length === 0) return <div className="loader"></div>;

  const cafefound = cafes.find((c) => c._id === coffeeShopId);
  let followed = false;
  if (profile)
    followed = cafefound.follows.find((follow) => follow._id == profile._id);

  return (
    <>
      <div className="oneCafe">
        <img src={cafefound.image} /> <h3>{cafefound.name}</h3>
        <p className="follows">{cafefound.follows.length} Followers</p>
        
        <div class="btns">
          {profile ? (
            <>
              {followed ? (
                <button
                  class="btnfollow"
                  onClick={() => followcafe(cafefound._id)}
                >
                  Following
                </button>
              ) : (
                <button
                  class="btnfollow"
                  onClick={() => followcafe(cafefound._id)}
                >
                  Follow
                </button>
              )}
            </>
          ) : (
            <>
              <button class="btnfollow" onClick={() => setShow(true)}>
                Follow
              </button>
            </>
          )}

          {profile ? (
            <Link to={`/review/${cafefound._id}`}>
              <button class="to-review">Add Review</button>
            </Link>
          ) : (
            <button class="to-review" onClick={() => setShow(true)}>
              Add Review
            </button>
          )}
        </div>
      </div>
      <div>
        <img src={img3} />
        <h2 class="titelreview">{cafefound.name} Reviews</h2>
        {cafefound.reviews.map((review) => (
          <div className="mb-2">
            <Review review={review} />
          </div>
        ))}
      </div>
      <FollowModal setShow={setShow} show={show} />
    </>
  );
}

export default OneCoffeeShop;
