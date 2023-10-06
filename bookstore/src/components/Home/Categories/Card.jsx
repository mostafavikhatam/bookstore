function Card({ d , handleClick}) {
  // console.log(d);

  return (
    <>
      {d.books.map((item , index ) => {
        return (
          <div className="card-container" onClick={()=>handleClick(item)} key={index}>
            <div className="wrapper-card">
              <div className="img-product-card">
                <img
                  src="../public/Images/5.jpg"
                  alt="HaryPoter"
                  className="card-img"
                />
              </div>
              <div className="data-product">
                <p className="name-product">{item.title}</p>
                <p>{item.price} ریال</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
