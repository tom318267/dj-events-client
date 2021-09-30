import React from "react";
import { parseCookies } from "../../helpers";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";
import DashboardEvent from "../../components/DashboardEvent";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = ({ events, token }) => {
  const router = useRouter();
  const deleteEvent = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.reload();
      }
    }
  };

  return (
    <Layout title="User Dashboard">
      <div>
        <h1 className="text-3xl font-sanchez font-bold mb-4">Dashboard</h1>
        <h2 className="text-xl text-red-500 font-roboto font-bold">
          My Events
        </h2>
        <ToastContainer />
        {events.map((event) => (
          <DashboardEvent
            key={event.id}
            event={event}
            handleDelete={deleteEvent}
          />
        ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const events = await res.json();

  return {
    props: {
      events,
      token,
    },
  };
}

export default Dashboard;
