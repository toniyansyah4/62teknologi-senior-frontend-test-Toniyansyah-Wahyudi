import React from "react";
import useReactRouter from "use-react-router";

import logo from "../assets/logo.png";

import styles from "./HomePage.module.css";

import { SearchBar } from "../components/searchBar/SearchBar";
import { BackgroundSlideshow } from "../components/backgroundSlider/BackgroundSlider";

export function LandingPage() {
  const { history } = useReactRouter();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }
  return (
    <div>
      <div className={styles.landing}>
        <div className={styles["search-area"]}>
          <img src={logo} alt="logo" className={styles.logo} />
          <SearchBar search={search} />
        </div>
      </div>
      <BackgroundSlideshow className={styles["image-slider"]} />
    </div>
  );
}
