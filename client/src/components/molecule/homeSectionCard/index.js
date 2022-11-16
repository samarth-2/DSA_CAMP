import './index.css';
import HomeCardEach from '../../atoms/homeCardEach';
import items from "./../../assets/store/homeCardData";

const  HomeSectionCards=(props)=> {

  function cardDisplay()
  {
    var li=[];
    for(var i=0;i<6;i++)
    {
      li.push(<HomeCardEach changeLoading={props.changeLoading} key={i} name={items[i].name} img={items[i].image} info={items[i].info} index={i}/>)
    }
    return li;
  }


  return (
    <>
    <h1 className='card__heading'>Dsacamp Exclusive Features</h1>
    <div className="card__section">
      {cardDisplay()}
    </div>
    </>
  );
}

export default HomeSectionCards;