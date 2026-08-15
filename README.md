# 🔥 HackWithUs — The Ultimate Hackathon & Event Hub

> **INNOVATE. COMPETE. GROW.**  
> Join thousands of developers, designers, and algorithmic competitors building real-world solutions in hackathons, testing skills in speed challenges, attending expert workshops, and taking daily CS trivia quizzes.

---

## ⚡ Tech Stack & Architecture

- **Frontend Core**: React 18 + Vite (Fast HMR & Optimized Production Bundles)
- **Styling & Aesthetics**: Tailwind CSS + Custom Modernist Neo-Brutalist Design System (`#FFDE00` Electric Yellow, high-contrast black borders, custom box shadows)
- **Authentication**: 100% Free Client-Side Google OAuth via Firebase Authentication (Zero backend servers required)
- **Icons**: Lucide React
- **Deployment Ready**: GitHub Pages, Vercel, Netlify, Cloudflare Pages

---

## ✨ Key Features

- 🏆 **Multi-Arena Event Hub**: Browse through **Hackathons**, **Competitions**, **Workshops**, and **CS Quizzes**.
- ⏱️ **Real-Time Status Arenas**: Filter events by **Ongoing** (Live), **Upcoming** (Registration Open), and **Concluded** (Leaderboards & Winners).
- 📜 **Full Event Info Popups**: Detailed event descriptions, prize breakdowns, difficulty metrics, tags, and organizer details.
- 🔗 **1-Click External Registration**: Seamless integration with **Unstop** (`Register Now (Unstop)`).
- 🔑 **Google Sign-In**: Enterprise-grade Google OAuth login with persistent user sessions and custom avatar header display.
- 🔔 **Interactive Notifications**: Live update dropdown with click-outside auto-close listener.
- 📱 **Fully Responsive Layout**: Mobile drawer menu, dynamic bento tiles, and high-DPI custom logo assets.

---

## 📁 Project Directory Structure

```text
hackwithus/
├── index.html                  # HTML entry point with high-DPI favicons
├── package.json                # Project dependencies & build scripts
├── vite.config.js              # Vite configuration (base: './' for GitHub Pages)
├── tailwind.config.js          # Design tokens, custom colors & neo-shadows
├── public/
│   └── hwu_favicon.png         # Cropped high-resolution brand favicon
├── src/
│   ├── main.jsx                # React root wrapper with AuthProvider
│   ├── App.jsx                 # Main application router & state controller
│   ├── index.css               # Design system tokens & utility classes
│   ├── firebase.js             # Client-side Firebase Authentication setup
│   ├── context/
│   │   └── AuthContext.jsx     # Google Auth state & localStorage sync
│   ├── data/
│   │   ├── eventsData.js       # Centralized event data & category metadata
│   │   └── hwu_favicon.png     # Asset logo file
│   └── components/
│       ├── Navbar.jsx          # Top app bar, notification menu & profile avatar
│       ├── Hero.jsx            # Hero slogan, banner & action CTA buttons
│       ├── FloatingTiles.jsx   # Bento grid category selector tiles
│       ├── EventSection.jsx    # Event grid with search & tab controls
│       ├── EventCard.jsx       # Event card renderer (Info & Register buttons)
│       ├── EventModal.jsx      # Full event description & info popup
│       ├── AuthModal.jsx       # Google Sign-In & Hacker Profile modal
│       └── Footer.jsx          # Footer sitemap & social links
```

---

## 🛠️ Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aayu62/hackwithus.git
   cd hackwithus
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000/` in your web browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The static distribution files will be generated inside the `dist/` directory.

---

## 🔒 Security & Firebase Domain Configuration

This project uses **100% Client-Side Google Authentication** via Firebase:
- No passwords or private tokens are stored on any backend server.
- API keys in `src/firebase.js` are public client identifiers.

### Required Step for Production Hosting:
Before logging in on your live hosted website, add your domain to Firebase:
1. Go to [Firebase Console](https://console.firebase.google.com/) ➔ Select your project (`hackwithus-cffd0`).
2. Go to **Authentication** ➔ **Settings** ➔ **Authorized Domains**.
3. Click **Add Domain** and add your hosted domain (e.g. `aayu62.github.io`).

---

## 🚀 Hosting on GitHub Pages

Because `vite.config.js` is configured with `base: './'`, deploying to GitHub Pages is seamless:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy using `gh-pages`** (Optional helper):
   ```bash
   npx gh-pages -d dist
   ```
   *(Or configure GitHub Actions under your Repository Settings ➔ Pages).*

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

Developed with ❤️ by **[Aayu62](https://github.com/Aayu62)** for developers worldwide.
