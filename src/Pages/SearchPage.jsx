import React from "react";
import AppTopBar from "../components/AppTopBar";
import MusicControlBar from "../components/MusicControlBar";
import SideBar from "../components/sideBar";

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
          <h1>Search</h1>
          <h4>This is search page</h4>
        </div>
      </div>
      <div className="music-control-bar">
        <MusicControlBar />
      </div>
    </>
  );
}
