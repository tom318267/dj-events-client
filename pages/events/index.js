import EventItem from "../../components/EventItem";
import Layout from "../../components/Layout";
import { API_URL, PER_PAGE } from "../../config/index";
import Pagination from "../../components/Pagination";

const EventsPage = ({ events, page, total }) => {
  return (
    <Layout>
      <h1 className="text-2xl mt-12 font-sanchez font-bold text-center sm:text-3xl">
        Events
      </h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}

      <Pagination page={page} total={total} />
    </Layout>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  // Fetch events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );

  const events = await eventRes.json();

  return {
    props: { events, page: +page, total },
  };
}

export default EventsPage;
