import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Indonesia from "./pages/Indonesia";
// import Programming from "./pages/Programming";
// import Covid19 from "./pages/Covid19";
import Saved from "./pages/Saved";
// import Search from "./pages/Search";
// import About from "./pages/About";

const App = () => {
    return (
        <div className="app_container">
            <Header />
            <Routes>
                <Route path="/"  element={<Indonesia />} />
                <Route path="/programming"/>
                <Route path="/covid19"/>
                <Route path="/saved"  element={<Saved />}/>
                <Route path="/search/:keyword"/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
