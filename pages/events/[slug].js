import React from "react";
import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EventMap from "../../components/EventMap";

const EventPage = ({ event }) => {
  return (
    <Layout>
      <div className="EventSlug flex flex-col justify-center pt-[80px] font-roboto">
        <span className="text-lg font-sanchez">
          {new Date(event.date).toLocaleDateString("en-US")} at {event.time}
        </span>
        <h1 className="text-3xl font-bold mb-3 font-sanchez">{event.name}</h1>
        <ToastContainer />
        {event.image && (
          <div className="my-4">
            <Image
              src={event.image.url}
              width={960}
              height={600}
              objectFit="contain"
            />
          </div>
        )}
        <h3 className="text-3xl font-bold">Performers:</h3>
        <p>{event.performers}</p>
        <h3 className="text-3xl font-bold">Description: </h3>
        <p>{event.description}</p>
        <h3 className="text-3xl font-bold">Venue: </h3>
        <p>{event.venue}</p>
        <h3 className="text-3xl font-bold">Address: </h3>
        <p>Address: {event.address}</p>

        <EventMap event={event} />

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

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`);
//   const events = await res.json();

//   const paths = events.map((event) => ({
//     params: { slug: event.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`);
//   const events = await res.json();
//   return {
//     props: {
//       event: events[0],
//       revalidate: 1,
//     },
//   };
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();
  return {
    props: {
      event: events[0],
    },
  };
}
