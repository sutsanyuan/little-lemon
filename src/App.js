import "./styles/App.scss";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reservation from "./components/pages/ReservationPage/Reservation";
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
