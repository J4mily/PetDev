import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Animais from "./pages/animais";
import Quiz from "./pages/quiz";
import Sobre from "./pages/sobre";
import Sugestao from "./pages/sugestoes";
import Depoimentos from "./pages/depoimentos";
import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer";
import Breadcrumb from "./componentes/breadcrumb/Breadcrumb";
import QuizBetta from "./pages/quiz/QuizBetta";
import Siames from "./pages/animais/Gatos/siames";
import Angora from "./pages/animais/Gatos/angora";
import BorderCollie from "./pages/animais/Cachorros/bordercollie";
import Pitbull from "./pages/animais/Cachorros/pitbull";


function App() {
  return (
    <Router>
      <Navbar />

      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Animais" element={<Animais />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Sugestoes" element={<Sugestao />} />
        <Route path="/Depoimentos" element={<Depoimentos />} />
        <Route path="/Quiz/QuizBetta" element={<QuizBetta/>} />
        <Route path="/Animais/Siames" element={<Siames/>} />
        <Route path="/Animais/Angora" element={<Angora/>} />
        <Route path="/Animais/bordercollie" element={<BorderCollie/>} />
        <Route path="/Animais/Pitbull" element={<Pitbull/>} />
      </Routes>
    
      <Footer />
    </Router>
  );
}
export default App;
