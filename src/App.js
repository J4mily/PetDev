import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Animais from "./pages/animais";
import Quiz from "./pages/quiz/Quiz";
import Sobre from "./pages/sobre/Sobre";
import Sugestao from "./pages/sugestoes/Sugestoes";
import Depoimentos from "./pages/depoimentos";
import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer";
import Breadcrumb from "./componentes/breadcrumb/Breadcrumb";
import QuizBetta from "./pages/quiz/QuizBetta";


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
        <Route path="/QuizBetta" element={<QuizBetta/>} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
