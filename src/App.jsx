import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./_app.css";

function App() {
  return (
    <div className="app">
        <Navbar />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
