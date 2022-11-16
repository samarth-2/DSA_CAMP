import './index.css';
import admin_icon from "./../../assets/icon/DSACAMP.png";

const  homeSectionNavbar=(props)=> {
  return (
    <>
      <nav>
        <div className="admin" onClick={()=>{props.adminClicked(1)}}><img src={admin_icon} style={{widht:"40px",height:"40px"}}/></div>
      </nav>
    </>
  );
}

export default homeSectionNavbar;