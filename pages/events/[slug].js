import React from "react";
import { FaPencilAlt, FaTimes, FaArrowLeft } from "react-icons/fa";
import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const EventPage = ({ event }) => {
  const deleteEvent = (e) => {
    console.log("delete");
  };

  return (
    <Layout>
      <div className="EventSlug flex flex-col justify-center relative pt-[80px]">
        <div className="absolute top-0 right-0 xl:right-28 flex font-roboto justify-center">
          <Link href={`/events/edit/${event.id}`}>
            <a className="text-blue-500 text-md md:text-lg">
              <FaPencilAlt /> Edit event
            </a>
          </Link>
          <a
            href="#"
            className="text-red-500 ml-[20px] text-md md:text-lg"
            onClick={deleteEvent}
          >
            <FaTimes /> Delete Event
          </a>
        </div>

        <span className="text-lg">
          {new Date(event.date).toLocaleDateString("en-US")} at {event.time}
        </span>
        <h1 className="text-3xl font-bold mb-3">{event.name}</h1>
        {event.image && (
          <div>
            <Image
              src={event.image.formats.small.url}
              width={960}
              height={600}
              objectFit="cover"
            />
          </div>
        )}
        <h3 className="text-2xl font-bold">Performers</h3>
        <p>{event.performers}</p>
        <p>{event.description}</p>
        <h3>Venue: {event.venue}</h3>
        <p>{event.address}</p>

        <Link href="/events">
          <button className="bg-purple-700 w-[160px] lg:w-[180px] mt-4 flex items-center justify-center gap-2 text-white font-roboto text-md md:text-lg shadow-md py-2 px-6 lg:text-lg font-semibold rounded-full hover:shadow-xl active:scale-90 transition duration-150">
            <ArrowLeftIcon className="h-6 lg:h-8" />
            Go Back
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();
  return {
    props: {
      event: events[0],
      revalidate: 1,
    },
  };
}
