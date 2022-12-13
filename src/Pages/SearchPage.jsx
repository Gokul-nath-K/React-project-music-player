import React from "react";
import AppTopBar from "../components/AppTopBar";
import MusicControlBar from "../components/MusicControlBar";
import SideBar from "../components/sideBar";
import SearchBar from "../MaterialUI/SearchBar";

export default function SearchPage() {
  return (
    <>
      <div className="app-top-bar">
        <AppTopBar />
      </div>
      <div className="side-nav-bar">
        <SideBar />
      </div>
      <div className="content-container">
        <div className="search-container">
          <SearchBar/>
        </div>
        {/* <div className="search-result">
          
        </div> */}
      </div>
      <div className="music-control-bar">
        <MusicControlBar />
      </div>
    </>
  );
}
