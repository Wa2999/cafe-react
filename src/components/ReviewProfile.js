import { useContext, useState } from "react";
import CoffeeContext from "../utils/CoffeeContext";
import img from "../img/clear.png";
import img2 from "../img/check.png";
import { Rating } from "react-simple-star-rating";

function ReviewProfile(props) {
  const { review } = props;
  const { deleteReview } = useContext(CoffeeContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="viewreview">
        <h3>{review.coffeeShop.name}</h3>

        <Rating
          ratingValue={review.ratingAverage * 20}
          iconsCount={5}
          transition
          fillColorArray={[
            "#f17a45",
            "#f19745",
            "#f1a545",
            "#f1b345",
            "#f1d045",
          ]}
          readonly={true}
        />

        <p>
          {review.currentemployee ? (
            <p>Current Employee</p>
          ) : (
            <p>Former Employee</p>
          )}
        </p>
        <p>{review.employmentStatus}</p>
        <h3 className="reviewheadline">{review.reviewheadline}</h3>
        <p>
          Last Year at Employer {review.lastYearatEmployer} in {review.location}
        </p>
        <div className="recomendrev">
          {review.businessOutlook ? (
            <p class="revpage">
              <img src={img2} width="20px" height="20px" /> BusinessOutlook
            </p>
          ) : (
            <p class="revpage">
              <img src={img} width="20px" height="20px" /> BusinessOutlook
            </p>
          )}

          {review.recommend ? (
            <p class="revpage">
              <img src={img2} width="20px" height="20px" /> Recommend
            </p>
          ) : (
            <p class="revpage">
              <img src={img} width="20px" height="20px" /> Recommend
            </p>
          )}
        </div>

        <b>Pros</b>
        <p>{review.pros}</p>

        <b>Cons</b>
        <p>{review.cons}</p>
        <b>Advice</b>
        <p>{review.advice}</p>

        <p> Work for a while {review.lengthofEmployment} years. </p>

        <button onClick={() => deleteReview(review._id)} className="del-rev">
          Delete
        </button>
      </div>
    </>
  );
}

export default ReviewProfile;
