import React, { useState } from "react";

export default function FindOutMore() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // For this example, we'll just log the values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
  };

  return (
    <div className="my-3 ">
      <h1 className="text-center md:text-3xl">Find Out More</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <h1>How do you want to make a impact?</h1>
          <div className="flex space-x-6 my-4">
            <button
              type="submit"
              className="bg-[#0b090b] text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Hero
            </button>
            <button
              type="submit"
              className="bg-[#07270b] text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Impactor
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#3bdfdf96] text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
