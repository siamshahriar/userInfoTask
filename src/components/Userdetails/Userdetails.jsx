import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Userdetails = () => {
  const location = useLocation();
  let path = location.pathname.slice(9);

  const [userDetails, setUserDetaiils] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log(userDetails);

  if (!loading) {
    const { firstName, lastName, email, company, address, image, id } =
      userDetails;

    const { name } = company;

    const { city, state } = address;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${path}`);
        const data = await response.json();
        setUserDetaiils(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [path]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-10 ">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="flex justify-center items-center lg:mt-20">
          <div className="card bg-base-100 shadow-xl lg:w-[30%]">
            <figure className="px-10 pt-10 ">
              <img
                src={userDetails.image}
                alt="Shoes"
                className="rounded-full h-20 w-20"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                First Name: {userDetails.firstName}
              </h2>
              <h2 className="card-title">Last Name: {userDetails.lastName}</h2>
              <p>Email: {userDetails.email}</p>
              <p>Company Name: {userDetails.company?.name}</p>
              <p>Address: {userDetails.address?.address} </p>
              <p>
                City: {userDetails.address?.city}, State:{" "}
                {userDetails.address?.state}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Userdetails;
