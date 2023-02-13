import React from "react";
import { Link } from "react-router-dom";

import { SearchBar } from "../components/searchBar/SearchBar";

import logo from "../assets/logo.png";
import styles from "./NavBar.module.css";
import { SubNav } from "./subNav/SubNav";

export function NavBar(props) {
  return (
    <div>
      <div className={styles["navBar"]}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <SearchBar
          small
          term={props.term}
          location={props.location}
          search={props.search}
        />
      </div>
      <SubNav />
    </div>
  );
}
