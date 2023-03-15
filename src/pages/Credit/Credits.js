import React from "react";
import CreditCard from "../../components/CreditCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Credit.css";
import profile1 from "../../asset/joel.JPG";
import profile2 from "../../asset/joelj.png";

export function Addscript(urlOfTheLibrary) {
  if (window.innerWidth > 720) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }
}

export const Credits = () => {
  return (
    <div id="credits-page">
      <Header />
      <h2 id="credit-title">The masterminds 😎</h2>
      <div className="credit-card-holder">
        <CreditCard
          name="Joel K George"
          profile={profile1}
          role="Full Stack Developer"
          year="2026"
        />
        <CreditCard
          name="Joel Joseph Roshan"
          profile={profile2}
          role="Full Stack Developer"
          year="2026"
        />
        <CreditCard
          name="Khushi Nilesh Ved"
          profile="photo coming soon"
          role="Full Stack Developer"
          year="2026"
        />
      </div>
      <Footer />
      {Addscript("./tilt.js")}
    </div>
  );
};
