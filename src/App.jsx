import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nevbar';
import Home from './pages/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SignupPage from './pages/SignupPage';


function App() {
  return (
    <main className='w-[100vw] min-h-screen flex flex-col'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
