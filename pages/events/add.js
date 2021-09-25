import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../config/index";

const AddEvents = () => {
  const [values, setValues] = useState({
    name: "",
    performers: "",
    venue: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    }

    const res = await fetch(`${API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error("Something went wrong");
    } else {
      const event = await res.json();

      console.log(event);

      router.push(`/events/${event.slug}`);
    }

    setValues({
      name: "",
      performers: "",
      venue: "",
      address: "",
      date: "",
      time: "",
      description: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Layout title="Add New Event">
      <div>
        <div className="flex items-center space-x-1 mb-8 font-bold text-purple-500">
          <FaArrowLeft />
          <Link href="/events">Go Back</Link>
        </div>
        <h1 className="text-2xl font-sanchez font-bold mb-8">Add Event</h1>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div>
              <label className="block" htmlFor="name">
                Event Name
              </label>
              <input
                className="w-full h-[40px] p-[5px] mt-[20px] mb-[30px] border-2 border-black"
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block" htmlFor="performers">
                Performers
              </label>
              <input
                className="w-full h-[40px] p-[5px] mt-[20px] mb-[30px] border-2 border-black"
                type="text"
                id="performers"
                name="performers"
                value={values.performers}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block" htmlFor="venue">
                Venue
              </label>
              <input
                className="w-full h-[40px] p-[5px] mt-[20px] mb-[30px] border-2 border-black"
                type="text"
                id="venue"
                name="venue"
                value={values.venue}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block" htmlFor="address">
                Address
              </label>
              <input
                className="w-full h-[40px] p-[5px] mt-[20px] mb-[30px] border-2 border-black"
                type="text"
                id="address"
                name="address"
                value={values.address}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block" htmlFor="date">
                Date
              </label>
              <input
                className="w-full h-[40px] p-[5px] mt-[20px] mb-[30px] border-2 border-black"
                type="date"
                id="date"
                name="date"
                value={values.date}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label className="block" htmlFor="time">
                Time
              </label>
              <input
                className="w-full h-[40px] p-[5px] mt-[20px] mb-[30px] border-2 border-black"
                type="text"
                id="time"
                name="time"
                value={values.time}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <label className="block">Event Description</label>
            <textarea
              className="w-full h-[150px] pl-1 border-2 border-black"
              type="text"
              id="description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black w-full mt-4 flex items-center justify-center gap-2 text-white font-roboto text-md md:text-lg shadow-md py-2 px-6 lg:text-lg font-semibold rounded-full hover:shadow-xl active:scale-90 transition duration-150"
          >
            Add Event
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddEvents;
