import React from "react";
import Card from "./Categories/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Categories({handleClick}) {
  const [dataCard, setDataCard] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        setDataCard(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="cartegories-container">
      {dataCard.map((d, i) => {
        // console.log(d);
        
        return (
          <div className="cartegories-container" key={i}>
            <div className="title-cg">
              <p className="title">{d.list_name}</p>
              <div className="line"></div>
            </div>
            <div className="slider-container">
              <div className="card-slide">
               <Card d={d} handleClick={handleClick}/>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
