import React from "react";

const AddItem = () => {
  return (
    <div className="add-item">
      <div className="add-item-content">
        <div className="post-form">
          <h2>Enter post information</h2>
          <form>
            <label htmlFor="#title">Enter post title:</label>
            <input type="text" id="title" />
            <label htmlFor="#description">Enter post description:</label>
            <input type="text" id="description" />
            <label htmlFor="#hashtags">Enter post hashtags:</label>
            <input type="hashtags" id="hashtags" />
            <label htmlFor="#location">Enter post your location:</label>
            <input type="text" id="location" />
            <label htmlFor="#filename">Enter post image url:</label>
            <input type="text" id="filename" />
            <label htmlFor="#createdAt">Enter date of post:</label>
            <input type="text" id="createdAt" />
          </form>
          <button className="next-btn">Post</button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
