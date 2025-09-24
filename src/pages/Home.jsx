import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../section/Hero";
import AuthForm from "../section/AuthForm";
import Card from "../components/Cards";
import AddYourOwnCard from "../components/AddYourOwnCard";
import Testimonials from "../components/Testimonials";
import Community from "../components/Community";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Card />
      <AddYourOwnCard />
      <Testimonials />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
