import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id, addFav }) => {

  return (
    <div className="card">
          <img src="C:\Users\HP\OneDrive\Escritorio\ctd-esp-fe3-final\fe3-final\src\images\dentista-ortodoncista.jpg" alt="doctor" />
          <Link to = {"/dentist/"+id}>
          <h3>{name}</h3>
          </Link>
          <p>{username}</p>
        <button onClick={()=> addFav(name,username,id)} className="favButton"> ⭐ </button>
    </div>
  );
};

export default Card;
