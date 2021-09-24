import EventItem from "../../components/EventItem";
import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1 className="text-2xl mt-12 font-sanchez font-bold text-center sm:text-3xl">
        Events
      </h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
