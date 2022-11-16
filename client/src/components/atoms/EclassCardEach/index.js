import React from "react";
import './index.css';
import { useEffect } from "react";
import img from "./../../assets/images/dsaimage/dsa img1.svg";

const EclassCardEach=(props)=> {
  return (
    <>
    <div key={props.i} className="Eclass__card__item">
        {/* <img src={img} alt={props.ele} className="Eclass__card__photo" /> */}
        <div className="Eclass__card__info">
            Class: {props.ele}
        </div>
    </div>
    </>
  );
}

export default EclassCardEach;