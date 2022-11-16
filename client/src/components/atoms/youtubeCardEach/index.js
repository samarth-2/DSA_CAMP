import './index.css';

const  youtubeCardEach=(props)=> {
  return (
    <>
    <a href={props.ele.link} target="_black" className="youtube__card__outer">
      <div className="youtube__card__name">
        {props.ele.name}
      </div>
      <div className="youtube__card__info">
        {props.ele.info}
      </div>
    </a>
    </>
  );
}

export default youtubeCardEach;