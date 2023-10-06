import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function Product({ card  }) {
  
  let sum = 0;
  
  
  for(let i = 0 ;i<card.length ; i++){
    sum = sum + card[i].price;
    
  
  }

  return (
    <div className="product-container" >
      <div className="product-wrapper">
        <div className="product-list-image-container">
          <img
            src="../public/Images/2.jpg"
            alt="HaryPoter"
            className="buy-product-img"
          />
        </div>
        <div className="product-shopped">
          <div className="add-msg">
            <AiFillCheckCircle />
            <p className="msg-text">به سبد خرید اضافه شد</p>
          </div>
          <div className="total-container">
            <span className="number">مجموع قیمت</span>
            <span className="total-number">({card.length}):</span>
            <span className="total-cost">{sum} ریال</span>
          </div>
          <div className="btn-list">
            <button className="see-list">مشاهده سبد خرید</button>
            <div className="process-container">
              <span className="process">ادامه فرایند خرید</span>
              <div class="vl"></div>
              <span className="process-container__total-number">8مورد</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
