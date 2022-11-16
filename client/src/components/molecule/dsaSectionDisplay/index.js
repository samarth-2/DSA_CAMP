import React from "react";
import './index.css';
import items from './../../assets/store/dsaSectionData.js';
import DsaCardEach from './../../atoms/dsaCardEach/index'

const  dsaSectionDisplay=(props)=> {

  function dsaCardDisplay()
  {
    var lis=[];
    for(var i=0;i<3;i++)
    {
      lis.push(<DsaCardEach key={i} ele={items[props.id].cards[i]}/>)
    }
    return lis;
  }

  return (
    <>
      <div className="dsa__section__outer">
        <div className="dsa__section__inner__left">
          <img src={items[props.id].image} alt="" className="dsa__section__image"/>
        </div>
        <div className="dsa__section__inner__right">
          <div className="dsa__section__heading">
            {items[props.id].name}
          </div>
          <div className="dsa__section__cards">
            {dsaCardDisplay()}
          </div>
        </div>
      </div>
    </>
  );
}

export default dsaSectionDisplay;