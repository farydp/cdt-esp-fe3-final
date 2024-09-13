
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Contact" element={<Contact/>} ></Route>
            <Route path="/Favs" element={<Favs/>} ></Route>
            <Route path="/Detail/:id" element={<Detail/>} ></Route>
            <Route path="*" element={<h1>404 Not Found</h1>} ></Route>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
