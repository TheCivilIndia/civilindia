import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nevbar';
import Home from './pages/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SignupPage from './pages/SignupPage';
import SSCStenographerPage from './pages/ssc/Stanographerexam';
import BankExamPage from './pages/ssc/BankExams';
import SSCMTSPage from './pages/ssc/SscMtsExam';
import SSCGDPage from './pages/ssc/SSCGdPage';
import SSCCGLPage from './pages/ssc/SSCCGLPage';
import SSCCPOPage from './pages/ssc/SSCPOPage';
import SSCCHSLPage from './pages/ssc/SSCCHSLPage';
import SSCJEPage from './pages/ssc/SSCJEExam';

import SSCJEExamPage from './pages/SSCJEExamPage';
import BankExamPageAgain from './pages/BankAgain';
import UPPCSExamPage from './pages/UPPCSExamPage';
import UPSuperTETPage from './pages/teaching/UPSuperTet';
import DSSSBExamPage from './pages/teaching/DSSSBExam';
import NVSExamPage from './pages/teaching/NVSExam';
import KVSPrimaryTeacherPage from './pages/teaching/KVSPrimaryTeaching';
import CTETUPTETPage from './pages/teaching/CTETPage';
import UPSCExamPage from './pages/UPSCExam';
import Footer from './components/Footer';
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
          <Route path='/career/ssc' element={<SSCJEExamPage/>} />
          <Route path='/career/ssc/stanographer-exam' element={<SSCStenographerPage/>} />
          <Route path='/career/ssc/bank-exams' element={<BankExamPage/>} />
          <Route path='/career/ssc/mts-exams' element={<SSCMTSPage/>} />
          <Route path='/career/ssc/gd-exam' element={<SSCGDPage/>} />
          <Route path='/career/ssc/cgl-exam' element={<SSCCGLPage/>} />
          <Route path='/career/ssc/cpo-exam' element={<SSCCPOPage/>} />
          <Route path='/career/ssc/chsl-exam' element={<SSCCHSLPage/>} />
          <Route path='/career/ssc/je-exam' element={<SSCJEPage/>} />
          <Route path='/career/bank' element={<BankExamPageAgain/>} />
          <Route path='/career/uppcs' element={<UPPCSExamPage/>} />
          <Route path='/career/teaching/up-super-tet' element={<UPSuperTETPage/>} />
          <Route path='/career/teaching/dssb-exam' element={<DSSSBExamPage/>} />
          <Route path='/career/teaching/nvs-exam' element={<NVSExamPage/>} />
          <Route path='/career/teaching/kvs-primary-exam' element={<KVSPrimaryTeacherPage/>} />
          <Route path='/career/teaching/ctet-uptet-exam' element={<CTETUPTETPage/>} />
          <Route path='/career/upsc-exam' element={<UPSCExamPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </main>
    </HelmetProvider>
  );
}

export default App;
