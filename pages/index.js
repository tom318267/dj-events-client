import EventItem from "../components/EventItem";
import Layout from "../components/Layout";
import { API_URL } from "../config/index";
import Link from "next/link";

export default function Home({ events }) {
  return (
    <Layout>
      <div className="flex flex-col justify-center relative">
        <h1 className="text-2xl mt-12 font-sanchez font-bold text-center sm:text-3xl">
          Upcoming Events
        </h1>
        {events.length === 0 && <h3>No events to show</h3>}

        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}

        {events.length > 0 && (
          <Link href="/events">
            <button className="bg-black w-full lg:w-[180px] mt-4 flex items-center justify-center gap-2 text-white font-roboto text-md md:text-lg shadow-md py-2 px-6 lg:text-lg font-semibold rounded-full hover:shadow-xl active:scale-90 transition duration-150">
              View All
            </button>
          </Link>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
