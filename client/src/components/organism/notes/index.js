import React from "react";
import './index.css';
import { useEffect } from "react";
import items from "./../../assets/store/notesCardData";
import notes_img1 from './../../assets/images/notesImage/notes img1.svg'
import Card from './../../atoms/notesCardEach/index';

const Notes=()=> {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="notes__outer__outer" >
      <div className="notes__outer">
        <div className="notes__section1">
          <img src={notes_img1} className="notes_img" alt=""/>
        </div>
        <div className="notes__heading">
          Notes
        </div>
        <div className="notes__card__outer">
          <Card items={items} />
        </div>
      </div>
    </div>
    </>
  );
}

export default Notes;