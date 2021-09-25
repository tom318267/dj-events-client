import React, { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const [term, setTerm] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/events/search?term=${term}`);
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTerm(e.target.value)}
          className="w-[250px] h-[35px] p-[5px] border-2 rounded-md"
          type="text"
          placeholder="Search Events"
        />
      </form>
    </div>
  );
};

export default Search;
