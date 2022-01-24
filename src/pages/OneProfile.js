import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img3 from "../img/img6.webp";
import ReviewUser from "../components/ReviewUser";

function OneProfile() {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(false);

  const getProfileById = async () => {
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

  if (!profile) return <div className="loader"></div>;

  return (
    <>
      <header>
        <div class="container">
          <div class="profile">
            <div class="profile-image">
              <img src={profile.avatar} />
            </div>

            <div class="profile-user-settings">
              <h1 class="profile-user-name">
                {profile.firstName} {profile.lastName}
              </h1>
            </div>

            <div class="profile-stats">
              <span class="profile-stat-count">
                {profile.follows.length} Following
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="profile-rev">
        <img src={img3} />
        <h2 class="titelreview"> My Reviews</h2>
        {profile.reviews.map((review) => (
          <div className="mb-2">
            <ReviewUser review={review} />
          </div>
        ))}
      </div>
    </>
  );
}

export default OneProfile;
