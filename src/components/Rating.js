import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import AddReview from "../pages/AddReview";

function Rating() {
  const [rating, setRating] = useState(0);

  const handelRating = async (rating) => {
    console.log(rating);
    setRating(rating);
  };
  return (
    <>
      <AddReview handelRating={handelRating} rating={rating} />
    </>
  );
}
export default Rating;
