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
import Siames from "./pages/animais/Gatos/siames";
import Angora from "./pages/animais/Gatos/angora";
import Persa from "./pages/animais/Gatos/persa";
import BorderCollie from "./pages/animais/Cachorros/bordercollie";
import Pitbull from "./pages/animais/Cachorros/pitbull";
import CanarioBelga from "./pages/animais/Passaros/CanarioBelga";
import CornSnake from "./pages/animais/Cobras/CornSnake";
import ScrollTop from "./componentes/scrollTop/ScrollTop";
import QuizBetta from "./pages/quiz/QuizBetta";
import QuizHamster from "./pages/quiz/QuizHamster";
import QuizSagui from "./pages/quiz/QuizSagui";
import Rottweiler from "./pages/animais/Cachorros/rottweiler";
import GoldenRetriever from "./pages/animais/Cachorros/goldenretriever";
import PastorAlemao from "./pages/animais/Cachorros/pastoralemao";
import ChowChow from "./pages/animais/Cachorros/chowchow";


function App() {
  return (
    <Router>
      <ScrollTop />
      <Navbar />
      
      <Breadcrumb />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/Animais" element={<Animais />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Sugestoes" element={<Sugestao />} />
        <Route path="/Depoimentos" element={<Depoimentos />} />
        <Route path="/Animais/Siames" element={<Siames/>} />
        <Route path="/Animais/Angora" element={<Angora/>} />
        <Route path="/Animais/Persa" element={<Persa/>} />
        <Route path="/Animais/BorderCollie" element={<BorderCollie/>} />
        <Route path="/Animais/Pitbull" element={<Pitbull/>} />
        <Route path="/Animais/CanarioBelga" element={<CanarioBelga/>} />
        <Route path="/Animais/CornSnake" element={<CornSnake/>} />
        <Route path="/Quiz/QuizBetta" element={<QuizBetta/>} />
        <Route path="/Quiz/QuizHamster" element={<QuizHamster/>} />
        <Route path="/Quiz/QuizSagui" element={<QuizSagui/>} />
        <Route path="/Animais/Rottweiler" element={<Rottweiler/>} />
        <Route path="/Animais/GoldenRetriever" element={<GoldenRetriever/>} />
        <Route path="/Animais/PastorAlemao" element={<PastorAlemao/>} />
        <Route path="/Animais/ChowChow" element={<cachorroChowChow/>} />

      </Routes>
    
      <Footer />
    </Router>
  );
}
export default App;

