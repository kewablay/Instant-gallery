import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main-container">
          <Route exact path="/" component={HomePage} />
          <Route path="/gallery" component={GalleryPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
