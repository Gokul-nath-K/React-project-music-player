import React from "react";
import AppTopBar from "../components/AppTopBar";
import MusicControlBar from "../components/MusicControlBar";
import Player from "../components/Player";
import SearchBar from "../components/SearchBar";
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
        <div className="inner-container">
          <SearchBar />
        </div>
      </div>
      <div className="music-control-bar">
        <Player />
      </div>
    </>
  );
}
