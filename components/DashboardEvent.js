import React from "react";
import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

const DashboardEvent = ({ handleDelete, event }) => {
  return (
    <div className="flex my-[10px] justify-between p-[10px] text-blue-500 font-bold font-roboto text-lg rounded-sm border-2 border-gray-300 bg-gray-200 items-center">
      <h4 className="text-sm sm:text-lg">
        <Link href={`/events/${event.slug}`}>
          <a>{event.name}</a>
        </Link>
      </h4>

      <div className="flex space-x-3 text-xs sm:text-lg">
        <Link href={`/events/edit/${event.id}`}>
          <a className="flex items-center space-x-1">
            <FaPencilAlt /> <span>Edit Event</span>
          </a>
        </Link>

        <a
          className="flex items-center text-red-500 cursor-pointer"
          onClick={() => handleDelete(event.id)}
        >
          <FaTimes /> <span>Delete</span>
        </a>
      </div>
    </div>
  );
};

export default DashboardEvent;
