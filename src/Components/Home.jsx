import React from "react";


import Review from "../assets/BackgroundFolder/Review.png";
import { motion } from "framer-motion"
import Impact_in_numbers from "./Impact_in_numbers";
import Our_History from "./Our_history";
import Customized_section from "./Customized_section";
import Testmonials from "./Testmonials";
import Rating_n_Reviews from "./Rating_n_Reviews";
import Services from "./Services";
import FAQ from "./FAQ";




function Home() {
  return (
    <>



        <Impact_in_numbers />
        <Our_History />

        <Customized_section />


        <Testmonials />

        <Rating_n_Reviews />

        <Services />



        <FAQ/>



    </>
  );
}

export default Home;
