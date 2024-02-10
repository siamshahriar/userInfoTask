import React from "react";
import { Link } from "react-router-dom";

const Card = ({ user }) => {
  const { firstName, lastName, email, company, address, image, id } = user;
  const { name } = company;
  const { address: userAddress, city, state } = address;
  //   console.log(userAddress);

  return (
    <div className="card bg-gradient-to-r from-slate-900 to-violet-900 p-5">
      <figure className="px-10 py-5">
        <img src={image} alt="Shoes" className="rounded-full h-20 w-20" />
      </figure>
      <div className=" items-center text-center">
        <div className="mb-1">
          <Link to={`/details/${id}`} className="text-xl font-serif">
            {firstName} {lastName}
          </Link>
        </div>
        <p className="font-mono text-sm my-3 mb-8">
          <span className="bg-cyan-900 p-2 rounded-lg text-white">{name}</span>
        </p>
        <div className="bg-slate-950 rounded-lg py-3 mb-1 flex justify-between px-4 font-extralight text-sm text-white">
          <span className="">Email:</span>
          <span className="">{email}</span>
        </div>
        <div className="bg-slate-950 h-16 rounded-lg py-3 font-extralight text-sm flex justify-between px-4 text-white">
          <span className="">Address:</span>
          <span className="text-end">
            {userAddress},<br></br>
            {city},{state}
          </span>
        </div>

        <div className="my-6">
          <Link to={`/details/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
