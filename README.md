# 🎬 Film Tracker

A React-TypeScript application that helps you track films you want to watch and ones you've already seen. The app uses the OMDB API for film data and localStorage for persisting your film lists.

## 📑 Table of Contents
- [Features](#features)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Setup](#environment-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features
- Search for films using the OMDB API
- Add films to your "Watch List"
- Mark films as "Seen It"
- Remove films from either list
- Persistent storage using localStorage
- Responsive design
- Error handling and loading states

## 🌐 Live Demo
[View Live Demo](https://myfilmtracker.netlify.app/)

## 🛠 Technologies Used
- React 18.2.0
- TypeScript 5.2.2
- Vite 5.2.0
- React Router DOM 6.23.1
- React Icons 5.2.1
- OMDB API
- localStorage for data persistence

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v7 or higher)
- OMDB API key (get it from [here](http://www.omdbapi.com/apikey.aspx))

### Installation
1. Clone the repository
```bash
git clone [your-repo-url]
cd film-tracker
```

2. Install dependencies
```bash
npm install
```

### Environment Setup
1. Create an environment directory and .env file
```bash
mkdir environment
touch environment/.env
```

2. Add your OMDB API key to the .env file
```env
VITE_OMDB_API_KEY=your_api_key_here
```

## 💻 Usage
1. Start the development server
```bash
npm run dev
```

2. Build for production
```bash
npm run build
```

3. Preview production build
```bash
npm run preview
```

## 📁 Project Structure
```
src/
├── api/
│   └── API.tsx
├── components/
│   ├── FilmCard.tsx
│   ├── FilmsAlreadySeen.tsx
│   ├── FilmsToWatchList.tsx
│   └── Nav.tsx
├── pages/
│   ├── ErrorPage.tsx
│   ├── FilmSearch.tsx
│   ├── SeenIt.tsx
│   └── WatchList.tsx
├── utils/
│   └── interfaces/
│       └── Film.interface.tsx
├── App.tsx
└── main.tsx
```

## 📚 API Reference

### OMDB API
The application uses the OMDB API to fetch film data. Each film object contains:
```typescript
interface Film {
  Title: string;
  Year: string;
  Director: string;
  Plot: string;
  Poster: string;
  // ... other properties
}
```

## 📦 Deployment
The application can be deployed to Netlify:

1. Create a netlify.toml file:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Deploy to Netlify:
- Connect your GitHub repository
- Set up environment variables
- Configure build settings

For detailed deployment instructions, see [Deployment Guide](your-deployment-doc-link).

## 🤝 Contributing
1. Fork the repository
2. Create a new branch
```bash
git checkout -b feature/amazing-feature
```
3. Commit your changes
```bash
git commit -m 'Add amazing feature'
```
4. Push to the branch
```bash
git push origin feature/amazing-feature
```
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Created by [Amit Nandy](https://github.com/nandyamit/) - feel free to contact me!