import React from "react";
import Link from "next/link";
import { PER_PAGE } from "../config/index";

const Pagination = ({ page, total }) => {
  const lastPage = Math.ceil(total / PER_PAGE);
  return (
    <div className="flex space-x-2">
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <button className="bg-black w-[130px] lg:w-[180px] mt-4 flex items-center justify-center gap-2 text-white font-roboto text-md md:text-lg shadow-md py-2 px-6 lg:text-lg font-semibold rounded-full hover:shadow-xl active:scale-90 transition duration-150">
            Prev
          </button>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <button className="bg-black w-[130px] lg:w-[180px] mt-4 flex items-center justify-center gap-2 text-white font-roboto text-md md:text-lg shadow-md py-2 px-6 lg:text-lg font-semibold rounded-full hover:shadow-xl active:scale-90 transition duration-150">
            Next
          </button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
