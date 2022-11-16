import './index.css';
import item from './../../assets/store/dsaSheetData';

const  DsaSectionSheetDisplay=()=> {

  function itemDisplay()
  {
    var li=[];
    for(var i=0;i<6;i++)
    {
      li.push(<a key={i} className='dsa__sheet__card' href={item[i].link} target="_black" >
                <img src={item[i].image} className="dsa__sheet__card__image"/>
                <div className='dsa__sheet__heading'>
                  {item[i].name}
                </div>
              </a>)
    }
    return li;
  }
  return (
    <>
      <div className='dsa__sheet__outer'>
        {itemDisplay()}
      </div>
    </>
  );
}

export default DsaSectionSheetDisplay;