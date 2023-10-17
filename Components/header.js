"use client"
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    function navToggle() {
      btn.classList.toggle("open");
      menu.classList.toggle("flex");
      menu.classList.toggle("hidden");
    }

    if (btn) {
      btn.addEventListener("click", navToggle);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("click", navToggle);
      }
    };
  }, []);

  return (
    <>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="https://i.ibb.co/m84SPDc/logo-transparent.png"
              alt="Logo"
              className="w-40 h-50 md:scale-150 "
            />
          </Link>
        </div>
        <div className=" space-x-16 text-[#c9c9d5] font-main text-3xl hidden md:flex">
          {/* <Link href="/" className="nav-desk">
            Home
          </Link>
          <Link href="/About" className="nav-desk">
            About
          </Link>
          <Link href="/Contact" className="nav-desk">
            Contact
          </Link> */}
        </div>
        <div className="md:hidden">
          <button
            id="menu-btn"
            type="button"
            className="z-40 block hamburger focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </div>
      <div
        id="menu"
        class="absolute top-0 bottom-0 left-0 hidden flex-col z-30 self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"
      >
        <Link href="/" className="text-white hover:text-pink-400">
          Home
        </Link>
        <Link href="/About" className="text-white hover:text-pink-400">
          About
        </Link>
        <Link href="/Contact" className="text-white hover:text-pink-400">
          Contact
        </Link>
      </div>
    </>
  );
};

export default Header;
