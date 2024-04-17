import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Animais from './pages/Animais';
import Quiz from './pages/Quiz';
import Sobre from './pages/Sobre';
import Sugestao from './pages/Sugestoes';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';

function App() {
  return (


    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animais" element={<Animais />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/sugestao" element={<Sugestao />} />
      </Routes>
      <Footer />
    </Router>



  );
}

export default App;
