import './index.css';
import {useState,useEffect} from 'react';
import HomeSectionCards from "./../../molecule/homeSectionCard/index";
import HomeSectionDisplay from "./../../molecule/homeSectionDisplay/index";
import HomeSectionFeedback from "./../../molecule/homeSectionFeedback/index";
import HomeSectionNavbar from "./../../molecule/homeSectionNavbar/index";
import home_icon from './../../assets/icon/DSACAMP.png';
import Axios from "axios";


const  HomePage=(props)=> {

  useEffect(() => {
    Axios.get('https://cuinfo.herokuapp.com/eventAll',
    {
      name:"eventAll",
    }).then((res)=>{
    });
  }, []);
  
  const[adminDisplay,setAdminDisplay]=useState({
                                              admin:"none",
                                              home:"block",
  });
  const[loginClick,setLoginClick]=useState({
                                          prev:"block",
                                          new:"none",      
  })
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[pass,setPass]=useState("");

  function adminClicked(click)
  {
    if(click===1)
    {
      setAdminDisplay({admin:"block",home:"none"});
    }
    else{
      setAdminDisplay({admin:"none",home:"block"});
    }
  }
  function loginClicked()
  {
    Axios.get('https://cuinfo.herokuapp.com/adminInfo',
    {
      params:{
        name:name,
        email:email,
        pass:pass,
      }
    }).then((res)=>{
      if(res.data.length===0)
      {
        props.adminControl(0);
        setLoginClick({prev:"none",new:"block"});
      }
      else
      {
        props.adminControl(1);
        setAdminDisplay({admin:"none",home:"block"});
        setName("");
        setEmail("");
        setPass("")
      }
    });
  }
  return (
    <>
      <div className='home__page__outer' style={{display:adminDisplay.home}}>
        <HomeSectionNavbar adminClicked={adminClicked}/>
        <br></br>
        <HomeSectionDisplay/>
        <br></br>
        <HomeSectionCards changeLoading={props.changeLoading}/>
        <br></br>
        <HomeSectionFeedback/>
      </div>
      <div className='admin__login__outer' style={{display:adminDisplay.admin}}>
        <div className='admin__login__inner'>
          <div className='admin__login__inner__card'>
            <div className='admin__heading'>
              LOGIN
            </div>
            <div className='admin__text'>
              Name : 
            </div>
            <input type="text" className='admin__text__input' onChange={(e)=>{setName(e.target.value)}}/>
            <div className='admin__text'>
              Email : 
            </div>
            <input type="email" className='admin__text__input' onChange={(e)=>{setEmail(e.target.value)}}/>
            <div className='admin__text'>
              Password : 
            </div>
            <input type="password" className='admin__text__input' onChange={(e)=>{setPass(e.target.value)}}/>
            <div className='admin__submit'>
              <div className='admin__submit__button' style={{display:loginClick.prev}} onClick={()=>{loginClicked()}}>
                Login
              </div>
              <div className='admin__submit__button' style={{display:loginClick.new,cursor:"not-allowed"}}>
                Login Declined
              </div>
              
            </div>
          </div>
          <div className='admin__home__button' onClick={()=>{adminClicked(0)}}>
            <img src={home_icon} style={{width:"30px",height:"30px"}} alt=""/>HOME
          </div>
        </div>
      </div>

    </>
  );
}

export default HomePage;