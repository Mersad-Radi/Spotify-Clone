import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { SideBar , LikedSongs } from "./components/navigation";
import { Search } from "./components/search";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/likedSongs" element={<LikedSongs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
