import './index.css';
import { useEffect,useState } from 'react';
import not_found from './../../assets/images/timetableImage/not_found.svg';
import heading_img from './../../assets/images/notesImage/notes img6.svg';
import img1 from './../../assets/images/notesImage/notes img4.svg';
import img2 from './../../assets/images/notesImage/notes img5.svg';
import items from './../../assets/store/timetableData';
import download_icon from './../../assets/icon/download.svg';

import sem5pdf from './../../assets/pdfs/sem5.pdf';
import sem3pdf from './../../assets/pdfs/sem3.pdf';

const  Timetable=()=> {



    const[groupVal,setGroupVal]=useState(1);
    const[semVal,setSemVal]=useState(3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  function displayGroups()
  {
    var li=[];
    
    for(var i=0;i<28;i++)
    {
        li.push(<option value={i+1}>Group {i+1}</option>)
    }
    return li;
  }


  function test()
  {
    var sem=parseInt(semVal);
    var group=parseInt(groupVal);
    try
    {
        var val=items[sem][group].img;
    }
    catch(err)
    {
        var val=not_found;
    }
    return val;
  }

  return (
    <>
      <div className="tt__outer__outer" >
        <div className="tt__outer">
          <div className="tt__section1">
            <img src={heading_img} className="tt_img" alt=""/>
          </div>
          <div className="tt__heading__mobile">
            TimeTable
          </div>
          <div className="tt__heading">
            TimeTable(CSE)
          </div>
            <div className='tt__input__outer'>
                <div className='tt__input__inner'>
                    <div className='tt__heading2'>
                        Select Semester :
                    </div>
                    <select className='tt__select' onChange={(e)=>{setSemVal(e.target.value)}}>
                        <option value="3">3rd SEM</option>
                        <option value="5">5th SEM</option>
                    </select>


                    <div className='tt__heading2'>
                        Select Group :
                    </div>
                    <select className='tt__select' onChange={(e)=>{setGroupVal(e.target.value)}}>
                        {displayGroups()}
                    </select>

                </div>
            </div>
            <div className="tt__heading">
                SEM: {semVal} | GROUP: {groupVal}
            </div>
            <div className="tt__heading__mobile" style={{fontSize:"30px"}}>
                SEM: {semVal} | GROUP: {groupVal}
            </div>
            <div className='tt__display__outer'>
                <div className='tt__display__inner'>
                    <img src={test()} className="tt_img"/>
                </div>
            </div>
            <div className="tt__heading">
                Full PDF
            </div>
            <div className="tt__heading__mobile" style={{fontSize:"30px"}}>
                Full PDF
            </div>
            <div className='tt__downlaod__outer'>
                <div className="tt__card__item">
                    <img src={img1} alt="pdf" className="tt__card__photo" />
                    <div className="tt__card__info">
                        <div className="tt__card__titlee">3th SEMESTER </div>
                        <p className="tt__card__text">3rd sem all groups combined time table provided by the university</p>
                        <div className="tt__card__button">
                        <a href={sem3pdf} target="_black" className="tt__card__download__button">
                            <img src={download_icon} className="tt__download" alt=""/>{'\u00A0'} PDF
                        </a>
                        </div>
                    </div>
                </div>

                <div className="tt__card__item">
                    <img src={img2} alt="pdf" className="tt__card__photo" />
                    <div className="tt__card__info">
                        <div className="tt__card__titlee">5th SEMESTER </div>
                        <p className="tt__card__text">5th sem all groups combined time table provided by the university</p>
                        <div className="tt__card__button">
                        <a href={sem5pdf} target="_black" className="tt__card__download__button">
                            <img src={download_icon} className="tt__download" alt=""/>{'\u00A0'} PDF
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Timetable;