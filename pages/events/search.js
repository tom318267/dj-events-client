import EventItem from "../../components/EventItem";
import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
import qs from "qs";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const SearchPage = ({ events }) => {
  const router = useRouter();
  return (
    <Layout>
      <div className="flex items-center text-purple-500 font-bold space-x-1">
        <FaArrowLeft />
        <Link href="/events">Go Back</Link>
      </div>

      <h1 className="text-2xl mt-12 font-sanchez font-bold text-center sm:text-3xl">
        Search Results for {router.query.term}
      </h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </Layout>
  );
};

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}

export default SearchPage;
