import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {useState } from 'react';
import HomePage from "./components/organism/homePage/index";
import Notes from "./components/organism/notes/index";
import Event from "./components/organism/event/index";
import Dsa from "./components/organism/dsa/index";
import Youtube from "./components/organism/youtube/index";
import Eclass from "./components/organism/Eclass/index";
import Timetable from "./components/organism/timetable/index";





const App =()=> {
  window.addEventListener("contextmenu", e => e.preventDefault());
  const[adminLoggedIn,setAdminLoggedIn]=useState("none");
  const[loading,setLoading]=useState(false);
  const d = new Date();
  var day=d.getDay();
  var hour=d.getHours();
  var min=d.getMinutes();
  var hhh=hour.toString();
  var mmm=min.toString();
  var val="";
  if(hhh.length<=1)
  {
    var hh="0"+hhh;
  }
  else
  {
    var hh=hhh;
  }
  if(mmm.length<=1)
  {
    var mm="0"+mmm;
  }
  else{
    var mm=mmm;
  }
  var ans=hh+mm;
  var check=parseInt(ans);

  var period=-1;
  if(check>=900 && check<=950)
  {
    period=1;
  }
  else if(check>=951 && check<=1040)
  {
    period=2;
  }
  else if(check>=1041 && check<=1130)
  {
    period=3;
  }
  else if(check>=1131 && check<=1220)
  {
    period=4;
  }
  else if(check>=1221 && check<=1310)
  {
    period=5;
  }
  else if(check>=1311 && check<=1400)
  {
    period=6;
  }
  else if(check>=1401 && check<=1450)
  {
    period=7;
  }
  else if(check>=1451 && check<=1540)
  {
    period=8;
  }
  else if(check>=1541 && check<=1630)
  {
    period=9;
  }
  else{
    period=-1;
  }


  function changeLoading()
  {
    setLoading(true);
  }

  function changeLoadingFalse()
  {
    setLoading(false);
  }

  function adminControl(x)
  {
    if(x===1)
    {
      setAdminLoggedIn("block");
    }
    else
    {
      setAdminLoggedIn("none");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage adminControl={adminControl} changeLoading={changeLoading}/>} ></Route>
        </Routes>
        <Routes>
          <Route path="/notes" element={<Notes/>}></Route>
        </Routes>
        <Routes>
          <Route path="/dsa" element={<Dsa />}></Route>
        </Routes>
        <Routes>
          <Route path="/event-notice" element={<Event adminLoggedIn={adminLoggedIn} changeLoadingFalse={changeLoadingFalse} loading={loading} /> } ></Route>
        </Routes>
        <Routes>
          <Route path="/youtube" element={<Youtube />}></Route>
        </Routes>
        <Routes>
          <Route path="/EmptyClass" element={<Eclass day={day} hour={hh} min={mm} check={check} pp={period}/>}></Route>
        </Routes>
        <Routes>
          <Route path="/TimeTable" element={<Timetable/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
