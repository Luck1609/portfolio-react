import React from "react";
import * as Icon from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-slate-900 to-slate-700">
      <div className="w-full max-w-6xl m-auto flex flex-col lg:flex-row p-3 text-slate-300">
        <label className="text-lg grow">
          &copy; {new Date().getFullYear()} - Built from scratch
        </label>

        <ul>
          <li className="inline-flex ">
            <a
              href="https://www.linkedin.com/in/nathaniel-obeng-056b4b138/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center h-10 w-10 m-auto rounded-lg"
            >
              <Icon.UilLinkedinAlt size={25} />
            </a>
          </li>
          <li className="inline-flex mx-3">
            <a
              href="https://github.com/Luck1609"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center h-10 w-10 m-auto rounded-lg"
            >
              <Icon.UilGithubAlt size={25} />
            </a>
          </li>
          <li className="inline-flex">
            <a
              href="https://wa.me/0503894555"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center h-10 w-10 m-auto rounded-lg"
            >
              <Icon.UilWhatsapp size={25} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
