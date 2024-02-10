import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = ({ handleSubmit, register, onSubmit }) => {
  return (
    <>
      <div className="card shrink-0 w-full  ">
        <form
          method="dialog"
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
        >
          <div className="flex gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                {...register("firstName")}
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                {...register("lastName")}
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              {...register("companyName")}
              type="text"
              placeholder="Company Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Street</span>
            </label>
            <input
              {...register("street")}
              type="text"
              placeholder="street"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex gap-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">city</span>
              </label>
              <input
                {...register("city")}
                type="text"
                placeholder="city"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">state</span>
              </label>
              <input
                {...register("state")}
                type="text"
                placeholder="state"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUserForm;
