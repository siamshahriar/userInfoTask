import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = () => {
  return (
    <form
      method="dialog"
      onSubmit={handleSubmit(onSubmit)}
      className="card-body"
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">First Name</span>
        </label>
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered"
          required
        />
      </div>

      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </div>
      <button onClick={handleCloseClick} className="btn">
        Close
      </button>
    </form>
  );
};

export default AddUserForm;
