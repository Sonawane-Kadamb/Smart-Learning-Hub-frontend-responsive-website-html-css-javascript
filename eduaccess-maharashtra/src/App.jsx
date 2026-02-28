import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import FloatingMenu from './components/common/FloatingMenu';
import MobileBottomNav from './components/common/MobileBottomNav';
import AIAssistant from './components/common/AIAssistant';
import LandingPage from './pages/LandingPage';
import SubjectsPage from './pages/SubjectsPage';
import Dashboard from './pages/Dashboard';
import MockTestPage from './pages/MockTestPage';
import CoursesPage from './pages/CoursesPage';
import StudyPlanner from './pages/StudyPlanner';
import NotesLibrary from './pages/NotesLibrary';
import Analytics from './pages/Analytics';
import Scholarships from './pages/Scholarships';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen">
          <ScrollProgress />
          <Navbar />
          <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/subjects" element={<SubjectsPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/tests" element={<MockTestPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/planner" element={<StudyPlanner />} />
              <Route path="/library" element={<NotesLibrary />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/scholarships" element={<Scholarships />} />
            </Routes>
          </main>
          <Footer />
          <FloatingMenu />
          <AIAssistant />
          <MobileBottomNav />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
