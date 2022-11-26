import React from "react";
import { GoLocation } from "react-icons/go";

const SingleItem = () => {
  return (
    <div className="single-item-page">
      <div className="single-item-container">
        <div className="single-item">
          <div className="left-content">
            <div className="image"></div>
            <div className="image-stats">
              <div className="likes">
                <span>Likes </span>
                <h2>30</h2>
              </div>
              <div className="views">
                <span>Views </span>
                <h2>1200</h2>
              </div>
              <div className="downloads">
                <span>Downloads </span>
                <h2>200</h2>
              </div>
            </div>
          </div>
          <div className="right-content">
            {/* <div className="main-user-info">
                      <img
                        className="user-image"
                        style={{ backgroundImage: `url(${item.user.profile_image.large})` }}
                      ></img>
                      <div className="user-name">
                        <h1>{item.user.name}</h1>
                        <p>@{item.user.username}</p>
                      </div>
                    </div> */}
            <div className="user-stats">
              <div className="likes">
                <p>Likes</p>
                <h1>100</h1>
              </div>
              <div className="photos">
                <p>Photos </p>
                <h1>12</h1>
              </div>
              <div className="collections">
                <p>Collections </p>
                <h1>2</h1>
              </div>
            </div>
            <div className="other-user-info">
              <span>Hashtags: {item.hashtags}</span>
              <div className="user-location">
                <span>Location Placeholder</span>
                <GoLocation color="red" size={30} />
              </div>
              <div className="description">
                <p>Description Placeholder</p>
              </div>

              <div className="dates">
                <span>Created At: Date Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
