import { useContext, useState } from "react";
import { Button, Col,Row, Form, ButtonGroup } from "react-bootstrap";
import CoffeeContext from "../utils/CoffeeContext";
import { Rating } from "react-simple-star-rating";
import { useParams } from "react-router-dom";
import { AiTwotoneLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import img from "../img/img6.webp";

function AddReview() {
  const { cafeid } = useParams();
  const { addReview, cafes } = useContext(CoffeeContext);
  const [current, setcurrent] = useState(false);
  const [recommend, setrecommend] = useState(false);
  const [business, setbusiness] = useState(false);
  const [ratingwork, setRatingwork] = useState(0);
  const [ratingValues, setratingValues] = useState(0);
  const [ratingDiversity, setratingDiversity] = useState(0);
  const [ratingBenefits, setratingBenefits] = useState(0);

  console.log(cafeid);

  const handelRatingwork = (ratingwork) => {
    console.log(ratingwork);
    setRatingwork(ratingwork);
  };
  const handelratingValues = (ratingValues) => {
    console.log(ratingValues);
    setratingValues(ratingValues);
  };

  const handelratingDiversity = (ratingDiversity) => {
    console.log(ratingDiversity);
    setratingDiversity(ratingDiversity);
  };
  const handelratingBenefits = (rating) => {
    console.log(rating);
    setratingBenefits(rating);
  };
  console.log(cafes);
  const cafeId = cafes.find((cafe) => cafe._id === cafeid);

  console.log(cafeId);
  return (
    <div className="review">
      
      <Form
        onSubmit={(e) =>
          addReview(
            e,
            cafeId._id,
            current,
            ratingwork,
            ratingValues,
            ratingDiversity,
            ratingBenefits,
            recommend,
            business
          )
        }
      >
        <div className="addrev">
       <img src={img} />  <h1>Add Review</h1>
       </div>

        <p>Are you a current or former employee ?</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <ButtonGroup>
            <Button
              variant={current ? "primary" : "light"}
              onClick={() => setcurrent(true)}
            >
              CURRENT
            </Button>
            <Button
              variant={!current ? "primary" : "light"}
              onClick={() => setcurrent(false)}
            >
              Former
            </Button>
          </ButtonGroup>
        </Form.Group>
        {current ? (
          <Form.Group className="mb-3">
            <Form.Label>Employment Status</Form.Label>
            <Form.Select
              aria-label="employmentStatus"
              name="employmentStatus"
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Freelance</option>
              <option>InternShip</option>
            </Form.Select>
          </Form.Group>
        ) : (
          <Form.Group className="mb-3">
            <Form.Label>Last Year at Employer</Form.Label>
            <Form.Select
              aria-label="lastYearatEmployer"
             
              name="lastYearatEmployer"
            >
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
              <option>2019</option>
            </Form.Select>
          </Form.Group>
        )}

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            Review Headline
          </Form.Label>
          <Col md="8">
            <Form.Control type="text" name="reviewheadline" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            Advice for management?
          </Form.Label>
          <Col md="8">
            <Form.Control type="text" name="advice" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            Rating WorkLife
          </Form.Label>
          <Col md="8">
            <Rating
              onClick={handelRatingwork}
              ratingValue={ratingwork}
              iconsCount={5}
              fillColorArray={[
                "#f17a45",
                "#f19745",
                "#f1a545",
                "#f1b345",
                "#f1d045",
              ]}
              readonly={ratingwork > 0}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            Rating Values
          </Form.Label>
          <Col md="8">
            <Rating
              onClick={handelratingValues}
              ratingValue={ratingValues}
              iconsCount={5}
              transition
              fillColorArray={[
                "#f17a45",
                "#f19745",
                "#f1a545",
                "#f1b345",
                "#f1d045",
              ]}
              readonly={ratingValues > 0}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            Rating Diversity
          </Form.Label>
          <Col md="8">
            <Rating
              onClick={handelratingDiversity}
              ratingValue={ratingDiversity}
              iconsCount={5}
              transition
              fillColorArray={[
                "#f17a45",
                "#f19745",
                "#f1a545",
                "#f1b345",
                "#f1d045",
              ]}
              readonly={ratingDiversity > 0}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            Rating Benefits
          </Form.Label>
          <Col md="8">
            <Rating
              onClick={handelratingBenefits}
              ratingValue={ratingBenefits}
              iconsCount={5}
              transition
              fillColorArray={[
                "#f17a45",
                "#f19745",
                "#f1a545",
                "#f1b345",
                "#f1d045",
              ]}
              readonly={ratingBenefits > 0}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            pros
          </Form.Label>
          <Col md="8">
            <Form.Control type="text" name="pros" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            cons
          </Form.Label>
          <Col md="8">
            <Form.Control type="text" name="cons" required />
          </Col>
        </Form.Group>

        <p>Recommend to a friend?</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Button
            variant="outline-success"
            className="ms-3"
            onClick={() => setrecommend(true)}
            style={{ width: "40px" }}
          >
            {recommend ? <AiTwotoneLike /> : <AiOutlineLike />}
          </Button>
          <Button
            variant="outline-danger"
            className="ms-3"
            onClick={() => setrecommend(false)}
            style={{ width: "40px" }}
          >
            {!recommend ? <AiTwotoneDislike /> : <AiOutlineDislike />}
          </Button>
        </Form.Group>

        <p>6 Month Business Outlook</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Button
            variant="outline-success"
            className="ms-3"
            onClick={() => setbusiness(true)}
            style={{ width: "40px" }}
          >
            {business ? <AiTwotoneLike /> : <AiOutlineLike />}
          </Button>
          <Button
            variant="outline-danger"
            className="ms-3"
            onClick={() => setbusiness(false)}
            style={{ width: "40px" }}
          >
            {!business ? <AiTwotoneDislike /> : <AiOutlineDislike />}
          </Button>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            Length Of Employment
          </Form.Label>
          <Col md="8">
            <Form.Control type="number" name="lengthofEmployment" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="3">
            Location
          </Form.Label>
          <Col md="8">
            <Form.Control type="text" name="location" required />
          </Col>
        </Form.Group>

        <button className="send-rev" type="submit">
          Submit Review
        </button>
      </Form>
    </div>
  );
}

export default AddReview;
