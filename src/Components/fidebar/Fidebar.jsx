import React, { useState } from "react";
import "./fidebar.css";
import listing from "../Data";

const Fidebar = () => {
  const [data, setdata] = useState([]);
  const [visible, setVisible] = useState(3);

  const showmoreitems = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  return (
    <div className="sidebar">
      <div className="sidewrapper">
        <h3>Subscription</h3>
        {listing.slice(0, visible).map((data,indx) => (
          <div className="list" key = {indx}>
            <div className="content">
              <p>
                {data.content}
                {/* {data.tag} */}
              </p> </div>
              
          </div>
        ))}
        <button className="show"onClick={showmoreitems}>Show More</button>
      </div>
    </div>

  )}
export default Fidebar