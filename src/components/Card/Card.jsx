import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  const { firstName, lastName, email, company, address, image, id } = user;
  const { name } = company;
  const { address: userAddress, city, state } = address;
  //   console.log(userAddress);

  return (
    <div className="card bg-base-200 shadow-xl">
      <figure className="px-10 pt-10 ">
        <img src={image} alt="Shoes" className="rounded-full h-20 w-20" />
      </figure>
      <div className="card-body items-center text-center">
        <Link to={`/details/${id}`} className="card-title">
          First Name: {firstName}
        </Link>
        <Link to={`/details/${id}`} className="card-title">
          Last Name: {lastName}
        </Link>
        <p>Email: {email}</p>
        <p>Company Name: {name}</p>
        <p>Address: {userAddress} </p>
        <p>
          City: {city}, State: {state}
        </p>
        <div className="card-actions">
          <Link to={`/details/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
