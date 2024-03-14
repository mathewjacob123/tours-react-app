import react from "react";
import {toast} from "react-toastify"
import Data from "../Database/Data";
const Card = ({ id, name, info, image, price }) => {
  function bookingHandler(){
    console.log("booked",id);
    toast.success("booked!");
  }
  return (
    <div className="card">
      <img src={image} className="image" alt="error"></img>

      <div className="tour-details">
        <h2 className="tour-price">{price}</h2>
        <h2 className="tour-name">{name}</h2>
        <div className="description">{info}</div>
      </div>
      <button className="btn-red" onClick={()=> bookingHandler(id)}>Book Now</button>
    </div>
  );
};

export default Card;