import './index.css';
import event_img1 from './../../assets/images/eventImage/event img1.svg';
import EventCardEach from './../../atoms/eventCardEach/index';
import LoadingScreen from './../../atoms/loadingScreen/index';
import Axios from 'axios';
import {useState,useEffect} from 'react';




const Event=(props)=> {

  



  const [all,setAll]=useState();
  const [displayFilter,setDisplayFilter]=useState({
                                              section:"none",
                                              onButton:"block",
                                              closeButton:"none"
  });
  const [whichDisplay,setWhichDisplay]=useState("all");
  const [accendingDateRes,setAccendingDateRes]=useState();
  const [decendingDateRes,setDecendingDateRes]=useState();
  const [accendingSNoRes,setAccendingSNoRes]=useState();
  const [decendingSNoRes,setDecendingSNoRes]=useState();



  const [valDate,setValDate]=useState("");
  const [valSubject,setValSubject]=useState("");
  const [valText,setValText]=useState("");
  const [valSNo,setValSNo]=useState();


  useEffect(() => {
    Axios.get('https://cuinfo.herokuapp.com/eventAll',
    {
      name:"eventAll",
    }).then((res)=>{
      setAll(res.data);
      props.changeLoadingFalse();
    });
  }, []);
  function getallagain()
  {
    Axios.get('https://cuinfo.herokuapp.com/eventAll',
    {
      name:"eventAll",
    }).then((res)=>{
      setAll(res.data);
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  function displayCard()
  {
    var li=[];
    var i;
    if(whichDisplay==="all")
    {
      li=[];
      for(i in all)
      {
        li.push(<EventCardEach key={i} all={all[i]} snoCheck={props.adminLoggedIn}/>)
      }
      li.reverse();
      return li;
    }
    else if(whichDisplay==="dateAccending")
    {
      li=[];
      for(i in accendingDateRes)
      {
        li.push(<EventCardEach key={i} all={accendingDateRes[i]} snoCheck={props.adminLoggedIn}/>)
      }
      return li;
    }
    else if(whichDisplay==="dateDecending")
    {
      li=[];
      for(i in decendingDateRes)
      {
        li.push(<EventCardEach key={i} all={decendingDateRes[i]} snoCheck={props.adminLoggedIn}/>)
      }
      return li;
    }
    else if(whichDisplay==="SNoAccending")
    {
      li=[];
      for(i in accendingSNoRes)
      {
        li.push(<EventCardEach key={i} all={accendingSNoRes[i]} snoCheck={props.adminLoggedIn}/>)
      }
      return li;
    }
    else if(whichDisplay==="SNoDecending")
    {
      li=[];
      for(i in decendingSNoRes)
      {
        li.push(<EventCardEach key={i} all={decendingSNoRes[i]} snoCheck={props.adminLoggedIn}/>)
      }
      return li;
    }
  }

  function accendingDateFetch()
  {
    setWhichDisplay("dateAccending");
    setDisplayFilter({section:"none",onButton:"block",closeButton:"none"});
    Axios.get('https://cuinfo.herokuapp.com/eventDate/accending',
    {
      name:"eventDateAccending",
    }).then((res)=>{
      setAccendingDateRes(res.data);
    });
  }

  function decendingDateFetch()
  {
    setWhichDisplay("dateDecending");
    setDisplayFilter({section:"none",onButton:"block",closeButton:"none"});
    Axios.get('https://cuinfo.herokuapp.com/eventDate/decending',
    {
      name:"eventDateDecending",
    }).then((res)=>{
      setDecendingDateRes(res.data);
    });
  }

  // function accendingSNoFetch()
  // {
  //   setWhichDisplay("SNoAccending");
  //   setDisplayFilter({section:"none",onButton:"block",closeButton:"none"});
  //   Axios.get('https://cuinfo.herokuapp.com/eventSNo/accending',
  //   {
  //     name:"eventSNoAccending",
  //   }).then((res)=>{
  //     setAccendingSNoRes(res.data);
  //   });
  // }

  // function decendingSNoFetch()
  // {
  //   setWhichDisplay("SNoDecending");
  //   setDisplayFilter({section:"none",onButton:"block",closeButton:"none"});
  //   Axios.get('https://cuinfo.herokuapp.com/eventSNo/decending',
  //   {
  //     name:"eventSNoDecending",
  //   }).then((res)=>{
  //     setDecendingSNoRes(res.data);
  //   });
  // }

  function addSubmit(){
    Axios.post('https://cuinfo.herokuapp.com/addEventCard',
    {
      date:valDate,
      subject:valSubject,
      text:valText,
    }).then((res)=>{
      getallagain();
    });
  }


  function deleteSubmit()
  {
    Axios.post('https://cuinfo.herokuapp.com/deleteEventCard',
    {
      sno:valSNo,
    }).then((res)=>{
      getallagain();
    });
  }

  return (
    <>
      <div className="event__outer__outer" >
        <div className="event__outer">
          <div className="event__section1">
            <img src={event_img1} className="event_img" alt=""/>
          </div>
          <div className="event__heading">
            Event/Notice
          </div>
          <div className="event__heading__mobile">
            Event
          </div>

          <div className='event__admin' style={{display:props.adminLoggedIn}}>
            <div className='event__admin__inner'>
              <div className='event__admin__inner__inner'>
                <div className='event__admin__heading'>
                  ADD
                </div>
                <div className='event__admin__name'>
                  date :
                </div>
                <input className='event__admin__input' onChange={(e)=>{setValDate(e.target.value)}}/>
                <div className='event__admin__name'>
                  subject :
                </div>
                <input className='event__admin__input' onChange={(e)=>{setValSubject(e.target.value)}}/>
                <div className='event__admin__name'>
                  text :
                </div>
                <textarea className='event__admin__input' onChange={(e)=>{setValText(e.target.value)}}/>
                <div className='event__admin__submit'>
                  <div className='event__admin__button' onClick={()=>{addSubmit()}}>
                    Submit
                  </div>
                </div>

                
                <div className='event__admin__heading'>
                  DELETE
                </div>
                <div className='event__admin__name'>
                  SNo. :
                </div>
                <input type="number" className='event__admin__input' onChange={(e)=>{setValSNo(e.target.value)}}/>
                <div className='event__admin__submit'>
                  <div className='event__admin__button' onClick={()=>{deleteSubmit()}}>
                    Submit
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='event__filter'>
            <div className="event__filter__button" style={{display:displayFilter.onButton}} onClick={()=>{setDisplayFilter({section:"block",onButton:"none",closeButton:"block"})}}>
              <div className="event__filter__button__inner">
                Filter
              </div>
            </div>
            <div className="event__filter__button" style={{display:displayFilter.closeButton}} onClick={()=>{setDisplayFilter({section:"none",onButton:"block",closeButton:"none"})}}>
              <div className="event__filter__button__inner">
                Close
              </div>
            </div>
          </div>
          <div className='event__filter__display' style={{display:displayFilter.section}}>
            <div className='event__filter__display__inner'>
              <div className='event__filter__display__each'>
                <div className='event__filter__display__heading'>
                  Sort Date : 
                </div>
                <div className='event__filter__display__button__outer'>
                  <div className='event__filter__display__button' onClick={()=>{accendingDateFetch()}}>
                    Oldest
                  </div>
                  <div className='event__filter__display__button' onClick={()=>{decendingDateFetch()}}>
                    Latest
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          {
            props.loading ? (
                <div class="loading-inner">
                    <LoadingScreen/>
                </div>
            ):(
            <div className="event__card__outer">
              {displayCard()}
            </div>
            )
          }
        </div>
      </div>
    </>
  );
}

export default Event;