import React from "react";
import Sticker from "./components/Sticker/Sticker.tsx";
import Page1 from "./pages/Page1/Page1.tsx";
import Page2 from "./pages/Page2/Page2.tsx";
import Page3 from "./pages/Page3/Page3.tsx";
import Wave from "./components/Wave/Wave.tsx";
import Page4 from "./pages/Page4/Page4.tsx";
import Page5 from "./pages/Page5/Page5.tsx";

import './App.css';
import Header from "./components/Header/Header.tsx";
import Page6 from "./pages/Page6/Page6.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Electric from "./components/Electric/Electric.tsx";
import Tree from "./components/Tree/Tree.tsx";

function App() {
  return (
    <div className="app">
      <Header/>
      <Sticker/>
      <Page1/>
      <Wave/>
      <Page2/>
      <Electric/>
      <Page3/>
      <Page4/>
      <Tree/>
      <Page5/>
      <Page6/>
      <Footer/>
    </div>
  );
}

export default App;
