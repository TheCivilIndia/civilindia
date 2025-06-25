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



function App() {
  return (
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
  );
}

export default App;
