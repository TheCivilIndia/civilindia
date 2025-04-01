import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nevbar';
import Home from './pages/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SignupPage from './pages/SignupPage';
import { Helmet, HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <HelmetProvider>
     <Helmet>
        {/* Primary Meta Tags */}
        <title>The Civil India | Top Civil Services Coaching</title>
        <meta name="description" content="India's leading institute for UPSC, PCS, SSC & banking exams. 20,000+ selections since 2006." />
        
        {/* Open Graph/Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thecivilindia.in" />
        <meta property="og:title" content="The Civil India | Premier Civil Services Coaching" />
        <meta property="og:description" content="Transform your career with India's most successful civil services coaching institute." />
        {/* <meta property="og:image" content="https://thecivilindia.in/og-image.jpg" /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TheCivilIndia" />
        <meta name="twitter:title" content="India's #1 Civil Services Coaching" />
        <meta name="twitter:description" content="Join 20,000+ successful candidates with our proven strategies." />
        {/* <meta name="twitter:image" content="https://thecivilindia.in/twitter-card.jpg" /> */}
      </Helmet>
      <main className='w-[100vw] min-h-screen flex flex-col'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </Router>
    </main>
    </HelmetProvider>
    
  );
}

export default App;
