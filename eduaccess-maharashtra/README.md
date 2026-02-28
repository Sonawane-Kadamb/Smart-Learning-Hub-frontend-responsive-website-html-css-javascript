# 🎓 EduAccess Maharashtra - SSC 10th Smart Learning Platform

A stunning, fully responsive educational web application built with modern technologies for Maharashtra State Board 10th Standard students.

![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3-cyan) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-pink)

## ✨ Features

### 🎯 Core Features
- **📚 Complete Subject Coverage** - All 7 SSC subjects with detailed chapters
- **🎯 Mock Tests** - Unlimited practice tests with real-time timer and instant results
- **📊 Student Dashboard** - Personalized dashboard with progress tracking and analytics
- **🎓 Free Video Courses** - Expert-taught comprehensive courses
- **📝 Notes & Video Library** - Extensive collection of study materials
- **📅 Study Planner** - Weekly schedule organizer with color-coded sessions
- **📈 Performance Analytics** - Detailed insights with charts and graphs
- **💰 Scholarship Updates** - Latest scholarship and exam notifications
- **🌓 Dark Mode** - Seamless dark/light theme switching
- **🤖 AI Assistant** - Mock AI study helper (UI demo)

### 🎨 Design Highlights
- **3D Glassmorphism UI** - Modern glass-effect cards and panels
- **Smooth Animations** - Framer Motion powered transitions
- **3D Hero Section** - Three.js animated 3D sphere
- **Parallax Effects** - Floating background elements
- **Scroll Animations** - Elements animate as you scroll
- **Card Tilt Effects** - 3D hover transformations
- **Gradient Buttons** - Eye-catching animated buttons
- **Custom Scrollbar** - Styled gradient scrollbar

### 📱 Mobile Features
- **Bottom Navigation** - Easy mobile navigation bar
- **Floating Action Menu** - Quick access to features
- **Touch-Friendly** - Optimized for mobile interactions
- **Responsive Grid** - Adapts to all screen sizes

## 🛠️ Tech Stack

- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **3D Graphics:** Three.js + React Three Fiber
- **Charts:** Recharts
- **Routing:** React Router DOM
- **Icons:** React Icons (Feather Icons)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Navigate to project directory:**
   ```bash
   cd eduaccess-maharashtra
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
eduaccess-maharashtra/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   │   ├── AIAssistant.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── FloatingMenu.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── MobileBottomNav.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   └── StatCard.jsx
│   │   ├── landing/         # Landing page components
│   │   │   └── Hero3D.jsx
│   │   └── layout/          # Layout components
│   │       ├── Footer.jsx
│   │       └── Navbar.jsx
│   ├── context/
│   │   └── ThemeContext.jsx # Dark mode context
│   ├── data/                # Mock JSON data
│   │   ├── courses.json
│   │   ├── mockTests.json
│   │   ├── scholarships.json
│   │   ├── studentData.json
│   │   └── subjects.json
│   ├── pages/               # All page components
│   │   ├── Analytics.jsx
│   │   ├── CoursesPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── LandingPage.jsx
│   │   ├── MockTestPage.jsx
│   │   ├── NotesLibrary.jsx
│   │   ├── Scholarships.jsx
│   │   ├── StudyPlanner.jsx
│   │   └── SubjectsPage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Color Palette

- **Deep Royal Blue:** `#1e3a8a`
- **Indigo:** `#4338ca`
- **Light Lavender:** `#e9d5ff`
- **Soft Purple:** `#a78bfa`
- **Subtle Cyan:** `#67e8f9`

## 📱 Pages Overview

### 1. Landing Page (`/`)
- 3D animated hero section with Three.js
- Animated statistics counters
- Feature highlights with glassmorphism cards
- Student testimonials carousel
- Call-to-action sections

### 2. Subjects Page (`/subjects`)
- 7 subject cards with progress tracking
- Chapter-wise breakdown with filters
- Difficulty badges (Easy/Medium/Hard)
- Search and filter functionality

### 3. Student Dashboard (`/dashboard`)
- Profile card with level and XP
- Study streak counter
- Weekly performance charts
- Subject progress radar chart
- Recent activities timeline
- Achievements and badges

### 4. Mock Tests (`/tests`)
- Test selection cards
- Live timer with countdown
- Question navigation
- Animated results modal
- Score breakdown

### 5. Courses Page (`/courses`)
- Course cards with thumbnails
- Progress tracking per course
- Chapter completion status
- Rating and reviews

### 6. Notes Library (`/library`)
- Searchable notes database
- Category filters
- PDF and video resources
- Preview modal

### 7. Study Planner (`/planner`)
- Weekly calendar view
- Day-wise schedule
- Time-blocked sessions
- Color-coded subjects

### 8. Analytics (`/analytics`)
- Monthly progress charts
- Subject performance bars
- Time distribution pie chart
- Activity heatmap

### 9. Scholarships (`/scholarships`)
- Scholarship opportunities
- Important exam dates
- Priority indicators
- Timeline view

## 🎯 Key Components

### Glass Card
```jsx
<GlassCard className="p-6">
  Your content here
</GlassCard>
```

### Button
```jsx
<Button variant="primary" size="lg" icon={<Icon />}>
  Click Me
</Button>
```

### Progress Bar
```jsx
<ProgressBar progress={75} color="from-blue-500 to-cyan-500" />
```

### Modal
```jsx
<Modal isOpen={isOpen} onClose={handleClose} title="Title">
  Modal content
</Modal>
```

## 🌟 Special Features

### Dark Mode
- Toggle between light and dark themes
- Persists in localStorage
- Smooth color transitions

### Floating Menu
- Quick access to main features
- Animated expansion
- Mobile-friendly placement

### AI Assistant
- Chat interface
- Quick question suggestions
- Message history

### Mobile Bottom Nav
- Fixed bottom navigation
- Active state indicators
- Touch-optimized icons

## 📊 Mock Data

All data is stored in JSON files:
- `subjects.json` - 7 subjects with chapters
- `mockTests.json` - Sample test questions
- `courses.json` - Video course information
- `studentData.json` - User profile and progress
- `scholarships.json` - Scholarship and exam updates

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette.

### Components
All components are modular and can be easily customized.

### Data
Replace JSON files in `/src/data/` with your own data.

## 📝 Future Enhancements

- Backend integration with real database
- User authentication and profiles
- Real AI chatbot integration
- Live video streaming
- Discussion forums
- Mobile app version

## 📄 License

This project is created for educational purposes and portfolio demonstration.

## 👨‍💻 Author

Built with ❤️ for Maharashtra SSC 10th Students

---

**🎯 Note:** This is a frontend-only UI/UX demonstration. All features use mock data.

**🌐 Live Demo:** Run `npm run dev` and visit http://localhost:5173
