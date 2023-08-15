import "./App.css";
import React from "react";
import HeaderSearch from "./components/headersearch/HeaderSearch";
import Header from "./components/header/Header";
import SecsionButtons from "./components/buttons/SecsionButtons";
import SectionUrban from "./components/urban/SectionUrban";
import SectionArticle from "./components/article/SectionArticle";
import SectionAtlasTests from "./components/atlastests/Section.AtlasTests";
import SectionWeTrust from "./components/wetrust/SectionWeTrust";
import SectionDna from "./components/dna/SectionDna";
import SectionFreeAtlas from "./components/freeatlas/SectionFreeAtlas";
import SectionFooter from "./components/footer/SectionFooter";

function App() {
  return (
    <div className="App">
      <HeaderSearch />
      <Header />
      <SecsionButtons />
      <SectionUrban />
      <SectionArticle />
      <SectionAtlasTests />
      <SectionWeTrust />
      <SectionDna />
      <SectionFreeAtlas />
      <SectionFooter />
    </div>
  );
}

export default App;
