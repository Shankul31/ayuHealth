import React, { Fragment, useState } from "react";
import { userProfiles } from "../../data/Profiles";
import "./Posts.scss";

function Posts() {
  const [userComments, setUserComments] = useState([]);
  const [commentBoxStatus, setCommentBoxStatus] = useState("");
  const [commentLists, setCommentsLists] = useState(
    JSON.parse(localStorage.getItem("commentsData")) || []
  );
  const [likesCount, setLikesCount] = useState(
    JSON.parse(localStorage.getItem("likesData")) || []
  );
  let profiles = userProfiles[0].images;

  const handleChange = (index, evt) => {
    setUserComments({ ...userComments, [index]: evt.target.value });
  };

  const postComment = (id, index) => {
    let tempAraay = JSON.parse(localStorage.getItem("commentsData")) || [];
    let currentDate = new Date().toString().split(" ").splice(1, 3).join(" ");

    tempAraay.push({
      image_id: id,
      comment: userComments[index],
      commentDate: currentDate,
    });
    setCommentsLists(tempAraay);
    localStorage.setItem("commentsData", JSON.stringify(tempAraay));
    setUserComments({ ...userComments, [index]: "" });
  };

  const handleLikes = (id) => {
    let likesArray = JSON.parse(localStorage.getItem("likesData")) || [];
    let currentDate = new Date().toString().split(" ").splice(1, 3).join(" ");
    let isElementExist = true;

    likesArray.forEach((element) => {
      if (element.image_id === id) {
        element.count += 1;
        isElementExist = !isElementExist;
      }
    });
    if (isElementExist) {
      likesArray.push({
        image_id: id,
        count: 1,
      });
    }

    setLikesCount(likesArray);
    localStorage.setItem("likesData", JSON.stringify(likesArray));
  };

  const handleCommentClick = (index) => {
    if (commentBoxStatus == index) {
      setCommentBoxStatus("");
    } else {
      setCommentBoxStatus(index);
    }
  };

  return (
    <div className="posts-container">
      <ul>
        {profiles &&
          profiles.map((image, index) => {
            return (
              <li className="post-wp" key={index}>
                <div className="post-image-wp">
                  <img src={image.img_url} alt="" className="insta-user-img" />
                  <p>
                    <span onClick={(evt) => handleCommentClick(index)}>
                      comment
                    </span>
                    <span onClick={(evt) => handleLikes(image.image_id)}>
                      &nbsp;&nbsp;Like
                    </span>
                  </p>
                  {likesCount &&
                    likesCount.map((like, index) => {
                      if (like.image_id === image.image_id) {
                        return <span>{like.count}&nbsp; Likes</span>;
                      }
                    })}
                  <input
                    className="comment-box"
                    type="text"
                    placeholder="Add comment"
                    name=""
                    id={"comment-text"}
                    value={userComments[index]}
                    onChange={(evt) => handleChange(index, evt)}
                    onKeyDown={(evt) => {
                      if (evt.key === "Enter")
                        postComment(image.image_id, index);
                    }}
                  />
                  <div className="comment-list">
                    {commentLists &&
                      commentLists.map((item, index) => {
                        if (item.image_id === image.image_id) {
                          return (
                            <p className="comment">
                              <span>{item.comment}</span>
                              <span>{item.commentDate}</span>
                            </p>
                          );
                        }
                      })}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Posts;
