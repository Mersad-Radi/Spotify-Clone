import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { SideBar, LikedSongs, NavBar, Footer } from "./components/navigation";
import { MusicPage } from "./components/music";
import { Search } from "./components/search";


function App() {
  return (

      <BrowserRouter>
        <div className="flex">
          <div>
            <SideBar />
          </div>
          <div className="w-full">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/likedSongs" element={<LikedSongs />} />
              <Route path="/musicPage" element={<MusicPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>

  );
}

export default App;
