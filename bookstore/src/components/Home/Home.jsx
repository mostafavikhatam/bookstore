import React from "react";
import Nav from "./Nav";
import Product from "./Product";
import Categories from "./Categories";
import { useState } from "react";

function Home() {
  const [card, setCard] = useState([]);
  const [isshow, setIsShow] = useState(false);

  const handleClick = (item) => {
    if (card.indexOf(item) !== -1) return;
    setCard([...card, item]);

    setIsShow(true);
  };
  let length = card.length;
  console.log(length)

  return (
    <div className="home-container">
      <Nav length={length}/>
      <div className="main-part">
        {isshow ? <Product card={card}   /> : ""}
        <div className="categories">
          <Categories handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Home;
