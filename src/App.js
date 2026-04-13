import "./styles/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reservation from "./Reservation";
function App() {
    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/reservation" element={<Reservation />}></Route>
                </Routes>

                <Footer />
            </Router>
        </>
    );
}

export default App;
