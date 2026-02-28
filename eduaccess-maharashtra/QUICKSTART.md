# 🚀 Quick Start Guide

## Run the Application

1. **Navigate to the project:**
   ```bash
   cd eduaccess-maharashtra
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Visit: `http://localhost:5173`

## Project Features

✅ **9 Fully Functional Pages**
- Landing Page with 3D Hero
- Subjects with Filters
- Student Dashboard
- Mock Tests with Timer
- Free Courses
- Notes Library
- Study Planner
- Performance Analytics
- Scholarships & Exams

✅ **UI/UX Features**
- 🌓 Dark/Light Mode Toggle
- 📱 Mobile Bottom Navigation
- 🎨 Glassmorphism Design
- ✨ Smooth Animations
- 🎯 3D Card Effects
- 🤖 AI Assistant UI

## Navigation Guide

### Desktop:
- Use top navbar to navigate
- Click floating + button for quick menu
- Toggle dark mode (sun/moon icon)

### Mobile:
- Use bottom navigation bar
- Hamburger menu for full navigation
- All touch-optimized

## Key Interactions

1. **Landing Page:**
   - Scroll to see animations
   - Click "Explore Subjects" or "Take Mock Test"

2. **Subjects:**
   - Click any subject card
   - Filter by difficulty
   - Search chapters

3. **Dashboard:**
   - View your progress
   - Check study streak
   - See achievements

4. **Mock Tests:**
   - Click "Start Test"
   - Answer questions
   - Submit to see results

5. **Courses:**
   - Browse free courses
   - Check progress
   - View chapters

6. **Study Planner:**
   - View weekly schedule
   - Switch between days
   - See full week overview

7. **Analytics:**
   - View performance charts
   - Check study patterns
   - Track improvements

8. **AI Assistant:**
   - Click purple chat icon (bottom right)
   - Ask questions (UI demo)
   - Try quick questions

## Technologies Used

- **React 18** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Three.js** - 3D Graphics
- **Recharts** - Data Visualization
- **React Router** - Navigation

## Mock Data Location

All data in `src/data/`:
- `subjects.json`
- `mockTests.json`
- `courses.json`
- `studentData.json`
- `scholarships.json`

## Important Notes

⚠️ **This is a FRONTEND-ONLY demo**
- No backend/database
- All data is mock/static
- Features are UI simulations
- Perfect for portfolio/learning

## Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Troubleshooting

**Port already in use?**
```bash
# Vite will suggest another port automatically
```

**Dependencies issue?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Styles not loading?**
- Ensure Tailwind config is correct
- Check if `index.css` imports are present

## Support

This is a demonstration project showcasing:
- Modern React patterns
- Advanced UI/UX design
- Responsive layouts
- Animation techniques
- Component architecture

Enjoy exploring! 🎉
