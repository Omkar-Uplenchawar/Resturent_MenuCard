import React from "react";

const MenuCart = ({ menuData }) => {
    // console.log(menuData);
  return (
    <>
      <section className="main-card--container">
        {menuData.map((curEle) => {
            const {id, name,category,image,description} = curEle
            
          return (
            <>
              <div className="card-container" key={curEle.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                    {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="image" className="card media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCart;
