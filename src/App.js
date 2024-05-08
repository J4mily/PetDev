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


function App() {
  return (
    <Router>
      <Navbar />

      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home/Animais" element={<Animais />} />
        <Route path="/Home/Quiz" element={<Quiz />} />
        <Route path="/Home/Sobre" element={<Sobre />} />
        <Route path="/Home/Sugestões" element={<Sugestao />} />
        <Route path="/Home/Depoimentos" element={<Depoimentos />} />
        <Route path="Home/Quiz/QuizBetta" element={<QuizBetta/>} />
      </Routes>

      <Footer />
    </Router>
  );
}
export default App;
