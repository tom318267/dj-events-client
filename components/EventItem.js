import React from "react";
import Link from "next/link";
import Image from "next/image";

const EventItem = ({ event }) => {
  return (
    <div className="sm:flex text-center justify-between items-center my-[20px] p-[13px] sm:shadow-md">
      <div className="flex-1 m-[10px]">
        <Image
          src={
            event.image
              ? event.image.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={170}
          height={100}
        />
      </div>

      <div className="flex-[2] mb-8">
        <span>
          {new Date(event.date).toLocaleDateString("en-US")} at {event.time}
        </span>
        <h3 className="font-bold">{event.name}</h3>
      </div>

      <div>
        <Link href={`/events/${event.slug}`}>
          <button className="bg-purple-700 w-4/5 sm:w-full text-white font-roboto mb-12 text-md shadow-md py-2 px-4 lg:text-lg font-semibold mr-2 rounded-full hover:shadow-xl active:scale-90 transition duration-150">
            Details
          </button>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default EventItem;
