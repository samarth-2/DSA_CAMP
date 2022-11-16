import './index.css';
import { useEffect } from 'react';
import youtube_img0 from './../../assets/images/youtubeimage/youtube img0.svg';
import YoutubeSectionDisplay from './../../molecule/youtubeSectionDisplay/index';


const  Youtube=()=> {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function sectionDisplay()
  {
    
    var li=[];
    for(var i=0;i<11;i++)
    {
      li.push(<YoutubeSectionDisplay key={i} id={i}/>)
    }
    return li;
  }

  return (
    <>
      <div className="youtube__outer__outer" >
        <div className="youtube__outer">
          <div className="youtube__section1">
            <img src={youtube_img0} className="youtube_img" alt=""/>
          </div>
          <div className="youtube__heading__mobile">
            Youtube
          </div>
          <div className="youtube__heading">
            Youtube Favourites
          </div>
          {sectionDisplay()}
        </div>
      </div>
    </>
  );
}

export default Youtube;