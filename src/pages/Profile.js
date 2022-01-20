import { useContext, useState } from "react";
import ProfileEditModal from "../components/ProfileEditModal";
import CoffeeContext from "../utils/CoffeeContext";
import { AiOutlineEdit } from "react-icons/ai";
import img3 from "../img/img6.webp";
import { Link } from "react-router-dom";
import ReviewProfile from "../components/ReviewProfile";

function Profile() {
  const { profile } = useContext(CoffeeContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

              <button class=" profile-edit-btn" onClick={handleShow}>
                <AiOutlineEdit />
              </button>
            </div>

            <div class="profile-stats">
              <Link to="/follows">
                <span class="profile-stat-count">
                  {profile.follows.length} Following
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <ProfileEditModal show={show} profile={profile} setShow={setShow} />
      <div className="profile-rev">
        <img src={img3} />
        <h2 class="titelreview"> My Reviews</h2>
        {profile.reviews.map((review) => (
          <div className="mb-2">
            <ReviewProfile review={review} fromprofile={profile}  />
          </div>
        ))}
      </div>
    </>
  );
}

export default Profile;
