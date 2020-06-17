import React, { Fragment } from "react";
import { userProfiles } from "../../data/Profiles";
import "./profile.scss";
import ImageViewer from "../imageViewer/ImageViewer";

function Profile() {
  let profiles = userProfiles[0];
  return (
    <Fragment>
      <div className="user-profile-header">
        <img src={profiles.profile_pic_url} alt="" style={{height:"200px", width:"200px", borderRadius: "100px"}} />
        <h1>{profiles.userName}</h1>
        <p>
          <span>
            <b>{profiles.images.length}</b>&nbsp;Posts
          </span>
          <span>
            &nbsp;&nbsp;<b>{profiles.followed_by.count}</b>&nbsp;followers
          </span>
          <span>
            &nbsp;&nbsp;<b>{profiles.follow.count}</b>&nbsp;following
          </span>
        </p>
      </div>
      <hr style={{ width: "75%" }} />
      <div className="container">
        <ul>
          {profiles.images &&
            profiles.images.map((item, index) => (
              <li key={index}>
                <ImageViewer image={item} />
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Profile;
