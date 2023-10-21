import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Indonesia from "./pages/Indonesia";
import Saved from "./pages/Saved";
import Programming from "./pages/Programming/Programming";
import Covid from "./pages/Covid19/covid";
const App = () => {
    return (
        <div className="app_container">
            <Header />
            <Routes>
                <Route path="/"  element={<Indonesia />} />
                <Route path="/programming" element={<Programming/>}/>
                <Route path="/covid19" element={<Covid/>}/>
                <Route path="/saved"  element={<Saved />}/>
                <Route path="/search/:keyword" element={<Search />}/>
                <Route path="/search/" element={<Search />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
