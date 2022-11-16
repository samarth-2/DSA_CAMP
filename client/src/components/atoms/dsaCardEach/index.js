import './index.css';

const  DsaCaedEach=(props)=> {
  return (
    <>
    <a href={props.ele.link} target="_black" className="dsa__card__outer">
      <div className="dsa__card__name">
        {props.ele.name}
      </div>
      <div className="dsa__card__info">
        {props.ele.info}
      </div>
    </a>
    </>
  );
}

export default DsaCaedEach;