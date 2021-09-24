import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center mt-[100px] text-[70px]">
          <FaExclamationTriangle />
          <h1 className="font-bold">404</h1>
        </div>

        <div className="text-center">
          <h4 className="font-bold">Sorry there is nothing here...</h4>
          <Link href="/">Go Back Home</Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
