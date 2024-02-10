import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Userdetails = () => {
  const location = useLocation();
  let path = location.pathname.slice(9);

  const [userDetails, setUserDetaiils] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${path}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const data = await response.json();
        setLoading(false);
        setUserDetaiils(data);
      } catch (error) {
        setErrorMessage(error.message);
        // console.log(error.message);
      }
    };
    fetchData();
  }, [path]);

  console.log(userDetails, errorMessage, loading);

  if (errorMessage) {
    return (
      <div className="flex flex-col gap-5 justify-center items-center h-[80vh] p-6">
        <h1 className="text-4xl text-red-500">User doesn`t exist</h1>
        <div>
          <Link to="/" className="btn btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      {loading ? (
        <div className="flex justify-center mt-10 ">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className=" min-h-[300px] md:min-h-[70vh] flex flex-col gap-5 justify-center items-center mx-5 md:m-0 mt-10">
          <div className="card flex lg:flex-row gap-5 justify-between md:justify-evenly shadow-2xl p-5  md:max-w-full lg:w-2/3 lg:py-16 bg-violet-900 ">
            <figure className="md:px-10 md:py-5">
              <img
                src={userDetails.image}
                alt="Shoes"
                className="rounded-full h-20 w-20 md:h-36 md:w-36"
              />
            </figure>
            <div className=" items-center text-center">
              <div className="mb-1">
                <p className="text-2xl font-serif">
                  {userDetails.firstName} {userDetails.lastName}
                </p>
              </div>
              <p className="font-mono  my-5 mb-8">
                <span className="bg-cyan-900 p-2 rounded-lg text-white">
                  {userDetails.company?.name}
                </span>
              </p>
              <div className="bg-slate-950 rounded-lg py-5 mb-2 md:mb-4 flex justify-between px-4 text-sm">
                <span className="">Email:</span>
                <span className="">{userDetails.email}</span>
              </div>
              <div className="bg-slate-950 h-20 rounded-lg py-2 md:py-3  text-sm flex justify-between px-4">
                <span className="">Address:</span>
                <span className="text-end">
                  {userDetails.address?.address},<br></br>
                  {userDetails.address?.city},{userDetails.address?.state}
                </span>
              </div>
            </div>
          </div>
          <div>
            <Link to="/" className="btn btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Userdetails;
