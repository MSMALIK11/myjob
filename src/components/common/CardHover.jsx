import React from "react";
import csv from "../../images/csv1.png";

const CardHover = () => {
  return (
    <div className="csv-card-wraper mt-20">
      {[1, 2, 3, 4, 5, 6].map((item,i) => {
        return (
          <>
            <div className="csv-card" key={i}>
              <img src={csv} alt="" />
            </div>
          </>
        );
      })}

    </div>
  );
};

export default CardHover;
