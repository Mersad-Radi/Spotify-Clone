import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { SideBar, LikedSongs, NavBar, Footer } from "./components/navigation";
import { Search } from "./components/search";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
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
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
