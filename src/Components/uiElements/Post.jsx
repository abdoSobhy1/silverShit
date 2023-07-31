import React from "react";
import { Link } from "react-router-dom";
import classes from "./Post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Post = ({ title, imageSrc, description, to }) => {
  return (
    <div className={classes.box}>
      <img src={imageSrc} alt="" />
      <div className={classes.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={classes.info}>
        <Link to={to}>Read More</Link>
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className={classes.arrowIcon}
        />
      </div>
    </div>
  );
};

export default Post;
