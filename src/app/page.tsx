import React from "react";
import { NextPage } from "next";
import styles from "./HomePage.module.css";

const HomePage: NextPage = () => {
  return (
    <div className={`${styles.container} flex items-center justify-center h-screen`}>
      <h1 className={`items-center text-4xl text-white font-bold`}>Wybierz typ aplikacji!</h1>
    </div>
  );
};

export default HomePage;
