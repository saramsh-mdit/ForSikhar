import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

import style from "./style.module.scss";

const ActivitiesCard = () => {
  return (
    <div className={style.activities_card}>
      <div className={style.card_image}>
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="image"
        />
      </div>
      <div className={style.info}>
        <p className={style.info_date}>12 July 2023</p>
        <h4 className={style.info_title}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h4>
      </div>
      <div className={style.info_read_more}>
        <a href="#">
          <p>Read More</p>
          <BiRightArrowAlt className={style.icon} />
        </a>
      </div>
    </div>
  );
};

export default ActivitiesCard;
