import React from "react";
import { useForm } from "react-hook-form";
const GetForm = ({ setdata ,settoogle }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function Getdata(data) {
    let dataobj = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      image: data.image,
    };
    setdata((prev) => [...prev, dataobj]);
    settoogle((prev)=>!prev)
    reset();
  }
  return (
    <div className=" flex justify-center items-center p-5 ">
      <form
        onSubmit={handleSubmit(Getdata)}
        className="w-full max-w-md bg-black p-8 rounded-2xl shadow-xl border border-slate-200 flex flex-col gap-4"
      >
        <div className="mb-3">
          <h1 className="text-2xl text-white font-bold ">Create Profile</h1>
          <p className="text-sm text-slate-500 mt-1">
            Enter your details below
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-white">Enter Name</label>
          <input
            type="text"
            {...register("name",{required:"Name is required"})}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 outline-none text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
          {errors.name &&  <p className="text-red-500 font-semibold">Please fill name</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-white">
            Enter Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email",{required:"email is required"})}
            className="w-full px-4 py-3 rounded-xl border text-white border-slate-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
           {errors.email &&  <p className="text-red-500 font-semibold">Please fill email</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-white">
            Enter Phone
          </label>
          <input
            type="tel"
            {...register("phone",{required:"phone is required"})}
            placeholder="Enter your phone"
            className="w-full px-4 py-3 rounded-xl border text-white border-slate-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
           {errors.phone &&  <p className="text-red-500 font-semibold">Please fill phone</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-white">
            Profile Image URL
          </label>
          <input
            type="url"
            {...register("image",{required:"image is required"})}
            placeholder="Enter image URL"
            className="w-full px-4 py-3 rounded-xl text-white border border-slate-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
           {errors.image &&  <p className="text-red-500 font-semibold">Please fill image</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
        >
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default GetForm;
