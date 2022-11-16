import React, {useState } from "react";
import './index.css';
import download_icon from './../../assets/icon/download.svg';
import OsLoveBabbar from './../../assets/pdfs/OperatingSystem_loveBabbar.pdf';
import Os from './../../assets/pdfs/OperatingSystem_ApnaCollege.pdf';
import Dbms from './../../assets/pdfs/DBMS_ApnaCollege.pdf';
import Java from './../../assets/pdfs/JAVA_dsacamp.pdf';
import Python from './../../assets/pdfs/PYTHON_dsacamp.pdf';
import PythonCodeWithHarry from './../../assets/pdfs/Python_CodeWithHarry.pdf';
import Cn from './../../assets/pdfs/ComputerNetworks_ApnaCollege.pdf';
import Ai from './../../assets/pdfs/AI_dsacamp.pdf';
import Ml from './../../assets/pdfs/ML_dsacamp.pdf';
import Oops from './../../assets/pdfs/OOPS_dsacamp.pdf';
import PA from './../../assets/pdfs/ProgrammingAbstractions_dsacamp.pdf';



const notesCardEach = ({ items }) => {
  return (
    <div className="notes__card__section">
      {items.map((item) => {
        const [view,setView]=useState();
        const { id, title, img, desc } = item;
        function handlePdfView(x)
        {
          var li=[PA,Java,Python,Ai,Ml,Oops,Cn,Dbms,Os,OsLoveBabbar,PythonCodeWithHarry];
          setView(li[x-1]);
        }
        return (
            <div key={id} className="notes__card__item">
              <img src={img} alt={title} className="notes__card__photo" />
              <div className="notes__card__info">
                <div className="notes__card__titlee">{title}</div>
                <p className="notes__card__text">{desc}</p>
                <div className="notes__card__button">
                  <a href={view} target="_black" className="notes__card__download__button" onClick={()=>{handlePdfView(id)}}>
                    <img src={download_icon} className="notes__download" alt=""/>{'\u00A0'} PDF
                  </a>
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
};

export default notesCardEach;