import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Animais from "./pages/animais";
import Quiz from "./pages/quiz";
import Sobre from "./pages/sobre";
import Sugestao from "./pages/sugestoes";
import Depoimentos from "./pages/depoimentos";
import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer/Footer";
import Breadcrumb from "./componentes/breadcrumb/Breadcrumb";


function App() {
  return (
    <Router>
      <Navbar />

      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animais" element={<Animais />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/sugestões" element={<Sugestao />} />
        <Route path="/depoimentos" element={<Depoimentos />} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
