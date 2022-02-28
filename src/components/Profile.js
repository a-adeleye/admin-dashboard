import profilePicture from "../images/profile-picture.jpg";
import imageOne from "../images/img-1.jpg";
import imageTwo from "../images/img-2.jpg";
import imageThree from "../images/img-3.jpg";

function Profile() {
  return (
    <section className="profile">
      <div className="profile-top">
        <div className="greetings">
          <h4>Hi John</h4>
          <p>Good morning</p>
        </div>
        <div className="icons">
          <div className="icon">
            <i className="fa-regular fa-comment-dots"></i>
          </div>
          <div className="icon">
            <i className="fa-regular fa-bell"></i>
          </div>
        </div>
      </div>
      <div className="profile-details">
        <div className="profile-picture">
          <img src={profilePicture} alt="profile picture" />
        </div>
        <div className="profile-name">
          <h5>John Doe</h5>
          <p>Front end Developer</p>
        </div>
        <div className="profile-stats">
          <div className="profile-stat">
            <h5>786k</h5>
            <p>Followers</p>
          </div>

          <div className="profile-stat">
            <h5>298</h5>
            <p>Followings</p>
          </div>

          <div className="profile-stat">
            <h5>438</h5>
            <p>Posts</p>
          </div>
        </div>
        <div className="profile-buttons">
          <button className="primary">View Profile</button>
          <button className="secondary">Edit Profile</button>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery-buttons">
          <div className="videos">
            <i className="fa-solid fa-video"></i>
            <h4>Videos</h4>
            <p>Click to add videos</p>
          </div>
          <div className="photos">
            <i className="fa-solid fa-camera"></i>
            <h4>Photos</h4>
            <p>Click to add photos</p>
          </div>
        </div>
        <div className="gallery-images">
          <img src={imageOne} alt="image" />
          <img src={imageTwo} alt="image" />
          <img src={imageThree} alt="image" />
        </div>
      </div>
    </section>
  );
}

export default Profile;
