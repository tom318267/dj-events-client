import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../../config/index";
import moment from "moment";
import Image from "next/image";
import { FaImage } from "react-icons/fa";
import Modal from "../../../components/Modal";
import ImageUpload from "../../../components/ImageUpload";

const EditEventPage = ({ event }) => {
  const [values, setValues] = useState({
    name: event.name,
    performers: event.performers,
    venue: event.venue,
    address: event.address,
    date: event.date,
    time: event.time,
    description: event.description,
  });

  const [showModal, setShowModal] = useState(false);

  const [imagePreview, setImagePreview] = useState(
    event.image ? event.image.formats.thumbnail.url : null
  );

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

    const res = await fetch(`${API_URL}/events/${event.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error("Something went wrong");
    } else {
      const event = await res.json();

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

  const imageUploaded = async (e) => {
    const res = await fetch(`${API_URL}/events/${event.id}`);

    const data = await res.json();

    setImagePreview(data.image.formats.thumbnail.url);

    setShowModal(false);

    router.push("/");
  };

  return (
    <Layout title="Add New Event">
      <div>
        <div className="flex items-center space-x-1 mb-8 font-bold text-purple-500">
          <FaArrowLeft />
          <Link href="/events">Go Back</Link>
        </div>
        <h1 className="text-2xl font-sanchez font-bold mb-8">Edit Event</h1>
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
                value={moment(values.date).format("yyyy-MM-DD")}
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
            className="bg-black w-full my-4 flex items-center justify-center gap-2 text-white font-roboto text-md md:text-lg shadow-md py-2 px-6 lg:text-lg font-semibold rounded-full hover:shadow-xl active:scale-90 transition duration-150"
          >
            Update Event
          </button>
        </form>

        <h2 className="text-lg font-bold">Event Image</h2>
        {imagePreview ? (
          <Image src={imagePreview} height={100} width={170} />
        ) : (
          <div>
            <p>No image uploaded</p>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-black w-[150px] my-4 flex items-center justify-center gap-2 text-white font-roboto text-md md:text-lg shadow-md py-2 px-6 lg:text-lg font-semibold rounded-full hover:shadow-xl active:scale-90 transition duration-150"
        >
          <FaImage /> Set Image
        </button>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ImageUpload eventId={event.id} imageUploaded={imageUploaded} />
      </Modal>
    </Layout>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`${API_URL}/events/${id}`);
  const event = await res.json();

  return {
    props: {
      event,
    },
  };
}

export default EditEventPage;
