import React, { useState } from "react";
import { API_URL } from "../config/index";

const ImageUpload = ({ eventId, imageUploaded, token }) => {
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("files", image);
    formData.append("ref", "events");
    formData.append("refId", eventId);
    formData.append("field", "image");

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      imageUploaded();
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h1>Upload Event Image</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="border-2 bg-gray-100 p-[10px]"
            type="file"
            onChange={handleFileChange}
          />
        </div>
        <button className="bg-purple-700 w-full text-white font-roboto text-md shadow-md py-2 px-4 lg:text-lg font-semibold mr-2 rounded-full hover:shadow-xl active:scale-90 transition duration-150">
          Upload
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
