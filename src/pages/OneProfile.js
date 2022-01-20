import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Review from "../components/Review";
import img3 from "../img/img6.webp";
import { Link } from "react-router-dom";

function OneProfile() {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(false);
//   const navigate = useNavigate();

  const profilefound = profile.find(profile=>profile._id===profileId)

  const getProfileById = async (profileId) => {
    const response = await axios.get(
      `https://cafe-api-299.herokuapp.com/api/auth/profile/${profileId}`,
      {
        headers: {
          Authorization: localStorage.tokenCoffee,
        },
      }
    );
    setProfile(response.data);
  };

  useEffect(() => {
    getProfileById();
  }, []);

  return (
    <>
     <header>
        <div class="container">
          <div class="profile">
            <div class="profile-image">
              <img src={profilefound.avatar} />
            </div>

            <div class="profile-user-settings">
              <h1 class="profile-user-name">
                {profilefound.firstName} {profilefound.lastName}
              </h1>
            </div>

            <div class="profile-stats">
              <Link to="/follows">
                <span class="profile-stat-count">
                  {profilefound.follows.length} Following
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="profile-rev">
        <img src={img3} />
        <h2 class="titelreview">  Reviews</h2>
        {profilefound.reviews.map((review) => (
          <div className="mb-2">
            <Review review={review} />
          </div>
        ))}
      </div>
    </>
   
  )
}

export default OneProfile;
