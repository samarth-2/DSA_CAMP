import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const  HomeCardEach=(props)=> {

  const navigate = useNavigate();


  function handleClickCard(x)
  {
    switch(x) {
      case 0:
        navigate("/EmptyClass");
        break;
      case 1:
        navigate("/notes");
        break;
      case 2:
        navigate("/dsa");
        break;
      case 3:
        navigate("/youtube");
        break;
      case 4:
        props.changeLoading();
        navigate("/event-notice");
        break;
      case 5:
        navigate("/Timetable");
        break;
      default:
        console.log("200");
    }
  }
  return (
    <>
    
      <div className="card" onClick={()=>{handleClickCard(props.index)}}>
        <div className="upper__container">
          <img src={props.img} className="home__card__img"/>
        </div>
        <div className="lower__container">
          <h4 className='lower__h4'>{props.name}</h4>
          <p className='lower__p'>{props.info}</p>
        </div>
      </div>
    </>
  );
}

export default HomeCardEach;