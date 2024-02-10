import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Home = () => {
  const [originalUsers, setOriginalUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${search}`
        );
        const data = await response.json();
        setOriginalUsers(data.users);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search]);

  useEffect(() => {
    // Create a copy of originalUsers for sorting
    const sortedUsers = [...originalUsers];
    switch (sortBy) {
      case "nameAZ":
        sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
        break;
      case "nameZA":
        sortedUsers.sort((a, b) => b.firstName.localeCompare(a.firstName));
        break;
      case "emailAZ":
        sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
        break;
      case "emailZA":
        sortedUsers.sort((a, b) => b.email.localeCompare(a.email));
        break;
      case "companyAZ":
        sortedUsers.sort((a, b) =>
          a.company.name.localeCompare(b.company.name)
        );
        break;
      case "companyZA":
        sortedUsers.sort((a, b) =>
          b.company.name.localeCompare(a.company.name)
        );
        break;
      default:
        break;
    }
    setUsers(sortedUsers);
  }, [sortBy, originalUsers]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setLoading(true); // Set loading state to true while fetching data
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const { firstName, lastName, email, companyName, street, city, state } =
      data;

    const user = {
      firstName,
      lastName,
      email,
      company: { name: companyName },
      address: { address: street, city, state },
    };

    // console.log(user);

    const PostData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        const data = await response.json();
        toast.success("User Added Successfully");
        reset();
        console.log(data);
      } catch (error) {
        console.log(error);
        toast.error(error);
      }
    };
    PostData();
    // console.log(data);
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-center my-10 gap-6">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Search Users by Title"
            className="input input-bordered input-info w-full max-w-xs "
          />
          <select
            onChange={handleSort}
            className="select select-primary max-w-xs"
          >
            <option defaultValue>Sort by Default</option>
            <option value="nameAZ">Sort by name A-Z</option>
            <option value="nameZA">Sort by name Z-A</option>
            <option value="emailAZ">Sort by email A-Z</option>
            <option value="emailZA">Sort by email Z-A</option>
            <option value="companyAZ">Sort by Company name A-Z</option>
            <option value="companyZA">Sort by Company name Z-A</option>
          </select>
        </div>
        <div className="text-center">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Add User
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <p className="pt-4 text-xl font-semibold">Add New User</p>
              <div className="modal-action flex flex-col">
                <div className="card shrink-0 w-full  bg-base-100">
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

                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center mt-10 ">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <div className="grid gap-5 my-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {users.map((user) => (
              <Card key={user.id} user={user}></Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
