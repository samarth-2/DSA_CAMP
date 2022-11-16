import './index.css';


const  EventCardEach=(props)=> {

    function eventCardText()
    {
        var li=[];
        var ele=(props.all.event_text).toString();
        var word="";
        var flag=0;
        for(var i=0;i<ele.length;i++)
        {
            if(ele[i]==="*")
            {
                var val="";
                for(var j=i+1;j<ele.length;j++)
                {
                    if(ele[j]==="*")
                    {
                        i=j;
                        break;
                    }
                    val=val+ele[j];
                }
                li.push(<><span>{word}</span><span style={{fontWeight:"bolder"}}>{val}</span></>)
                word="";
                flag=1;
            }
            else if(ele[i]==="%")
            {
                if(flag===1)
                {
                    li.push(<><p style={{display:"inline"}}>{word}</p><br></br><br></br></>);
                    word="";
                    flag=0;
                }
                else
                {
                    li.push(<><p>{word}</p><br></br></>);
                    word="";
                }
                
            }
            else if(ele[i]==="$")
            {
                if(flag===1)
                {
                    li.push(<><p style={{display:"inline"}}>{word}</p><br></br></>);
                    word="";
                    flag=0;
                }
                else
                {
                    li.push(<><p>{word}</p></>);
                    word="";
                }
            }
            else
            {
                word=word+ele[i]
            }
        }
        li.push(word);
        return li;
    }
  return (
    <>
    <div className="event__card__inner">
        <div className="event__card__heading">
            <div className="event__card__heading__no" style={{display:props.snoCheck}}>
                {props.all.event_id}
            </div>
            <div className="event__card__heading__topic">
                {props.all.event_topic}
            </div>
            <div className="event__card__heading__date">
                {props.all.event_date}
            </div>
        </div>
        <div className="event__card__text">
            {eventCardText()}
        </div>
    </div>
    </>
  );
}

export default EventCardEach;