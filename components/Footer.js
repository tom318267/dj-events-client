import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-[100px] mb-[40px] text-center">
      <p>Copyright &copy; DJ Events 2021</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  );
};

export default Footer;
