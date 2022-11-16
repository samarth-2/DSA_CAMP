import React, { useState } from "react";
import './index.css';
import notes_filter from './../../assets/images/notesImage/notes filter.svg'



const catogaryEach = ({ categories, filterItems, activeCategory ,changeFilterDisplayFunc}) => {
  
  
  
  
  return (
    <>
    <div className="notes__category__container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className={`${
              activeCategory === category ? "notes__filter-btn notes__active" : "notes__filter-btn"
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
    <div className="notes__filter__outer">
      <div className="notes__filter__inner">
        <div className="notes__filter__button" onClick={()=>{changeFilterDisplayFunc(1)}}>
          Filter <img src={notes_filter} className="notes__filter__img"/>
        </div>
      </div>
    </div>
    </>
  );
};

export default catogaryEach;