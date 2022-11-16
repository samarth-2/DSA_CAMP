import './index.css';
import { useEffect } from 'react';
import dsa_img1 from './../../assets/images/dsaimage/dsa img10.svg';
import DsaSectionDisplay from './../../molecule/dsaSectionDisplay/index';
import DsaSectionSheetDisplay from '../../molecule/dsaSectionSheetDisplay/index';

function sectionDisplay()
{
  
  var li=[];
  for(var i=0;i<4;i++)
  {
    li.push(<DsaSectionDisplay key={i} id={i}/>)
  }
  return li;
}
const  Dsa=()=> {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="dsa__outer__outer" >
        <div className="dsa__outer">
          <div className="dsa__section1">
            <img src={dsa_img1} className="dsa_img" alt=""/>
          </div>
          <div className="dsa__heading__mobile">
            DSA
          </div>
          <div className="dsa__heading">
            Data Structure And Algorithms (DSA)
          </div>
          <DsaSectionSheetDisplay/>
          {sectionDisplay()}
        </div>
      </div>
    </>
  );
}

export default Dsa;