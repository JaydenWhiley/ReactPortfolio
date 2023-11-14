import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts/fonts.css";
import Button from "./Components/Button";
import DashCard from "./Components/DashCard";
import DashContainer from "./Components/DashContainer";
import Header from "./Components/Header";
import Footer from "./Components/footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <DashContainer>
        <Header />
        <DashCard />
        <Footer />
      </DashContainer>
    </>
  </React.StrictMode>
);
