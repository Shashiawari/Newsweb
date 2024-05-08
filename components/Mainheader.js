"use client";
import "../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useEffect } from "react";

const Mainheader = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const path = usePathname();
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand mx-2" href={"/"}>
          HOME
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" class="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>{" "}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                href={"/news"}
                className={
                  path.startsWith("/news") ? "active nav-link mx-2" : "nav-link mx-2"
                }
              >
                NEWS
              </Link>
            </li>
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link
                href={"/real"}
                className={
                  path.startsWith("/real") ? "active nav-link mx-2" : "nav-link mx-2"
                }
              >
                Realtime News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={"/search"}
                className={
                  path.startsWith("/search") ? "active nav-link" : "nav-link"
                }
              >
                search
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Mainheader;
