import React from "react";
import './index.css';
import items from './../../assets/store/youtubeSectionData.js';
import YoutubeCardEach from './../../atoms/youtubeCardEach/index';

const  youtubeSectionDisplay=(props)=> {

    function youtubeCardDisplay()
    {
    var lis=[];
    for(var i=0;i<3;i++)
    {
        lis.push(<YoutubeCardEach key={i} ele={items[props.id].cards[i]}/>)
    }
    return lis;
    }

  return (
    <>
      <div className="youtube__section__outer">
        <div className="youtube__section__inner__left">
            <img src={items[props.id].image} className="youtube__section__image" alt=""/>
            <div className="youtube__section__inner__left__name">
                {items[props.id].name}
            </div>
        </div>
        <div className="youtube__section__inner__right">
            {youtubeCardDisplay()}
        </div>
      </div>
    </>
  );
}

export default youtubeSectionDisplay;