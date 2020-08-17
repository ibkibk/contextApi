import React from "react";
import style from "./Books.module.scss";

function Books({ author, title, price }) {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.author}>{author}</div>
        <div className={style.title}>{title}</div>
        <div className={style.price}>{price}</div>
      </div>
    </div>
  );
}

export default Books;
