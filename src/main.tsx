import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts/fonts.css";
import DashCard from "./Components/DashCard";
import DashContainer from "./Components/DashContainer";
import Header from "./Components/Header";
import Footer from "./Components/PageFooter";
import Controls from "./Components/Controls";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <DashContainer>
        <Header />
        <DashCard />
        <Controls />
        <Footer />
      </DashContainer>
    </>
  </React.StrictMode>
);
