import React, { useState, Fragment } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import Posts from "../posts/Posts";
import "./ImageVIewer.scss";

function ImageViewer({ image }) {
  return (
    <div className="image-container">
      <Link
        to={{
          pathname: "/posts",
        }}
      >
        <img
          src={image.img_url}
          alt=""
          style={{ cursor: "pointer", width: "300px", height: "300px" }}
        />
      </Link>
    </div>
  );
}

export default ImageViewer;
