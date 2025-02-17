import React from "react";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import { Pricing } from "./components/Pricing";


const App = () => {
  return (
   <>
   <NavBar/>
   <div className="max-w-7xl mx-auto pt-20 px-6">
    <MainSection />
    <FeatureSection />
    <Workflow />
    <Pricing />
    </div>
   
   </>
  );
};

export default App;
