<<<<<<< HEAD
<<<<<<< HEAD
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
=======
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Indonesia from "./pages/Indonesia";
// import Programming from "./pages/Programming";
// import Covid19 from "./pages/Covid19";
// import Saved from "./pages/Saved";
// import Search from "./pages/Search";
// import About from "./pages/About";

=======
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Indonesia from "./pages/Indonesia";
// import Programming from "./pages/Programming";
// import Covid19 from "./pages/Covid19";
// import Saved from "./pages/Saved";
// import Search from "./pages/Search";
// import About from "./pages/About";

>>>>>>> c60267f (Slicing View)
const App = () => {
    return (
        <div className="app_container">
            <Header />
            <Routes>
                <Route path="/"  element={<Indonesia />} />
                <Route path="/programming"/>
                <Route path="/covid19"/>
                <Route path="/saved"/>
                <Route path="/about"/>
                <Route path="/search/:keyword"/>
            </Routes>
            <Footer />
        </div>
    );
<<<<<<< HEAD
>>>>>>> yusrilap
=======
>>>>>>> c60267f (Slicing View)
}

export default App;
