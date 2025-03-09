# CommunionHub React Web App

## 🚀 Introduction

The **CommunionHub React Web App** is a simple two-page application that connects people across different faiths through events and community support. The app allows users to explore, filter, and add events.

## 📌 Live Demo

🔗 [CommunionHub Live](https://communion-hub-chi.vercel.app)

## ✨ Features

✅ **Home Page:**

- Welcoming message and introduction about the Communion App
- Hero section with a title, description, and CTA button ("Explore Events")
- Navigation bar with links to **Home**, **Events**, and **About**

✅ **Event Listing Page:**

- Displays a list of events (Title, Date, Location, and Description)
- Filter events by category (**Religious, Social, Charity**)
- Form to add a new event (Title, Date, and Category)
- Smooth UI animations using **Framer Motion**

✅ **Other Features:**

- Responsive design for both desktop and mobile
- Hosted on **Vercel**

## ⚙️ Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (Latest LTS recommended)
- **npm** or **yarn**

### Steps to Install & Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sadia492/CommunionHub.git
   cd CommunionHub
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
4. Open `http://localhost:5173` in your browser.

## 🛠️ Dependencies

The project uses the following dependencies:

```json
"dependencies": {
  "@tailwindcss/vite": "^4.0.12",
  "framer-motion": "^12.4.10",
  "motion": "^12.4.10",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router": "^7.3.0",
  "tailwindcss": "^4.0.12"
}
```

## 🔧 Configuration

- **Tailwind CSS** is used for styling. Configuration is inside `tailwind.config.js`.
- **React Router** handles page navigation.
- **Framer Motion** provides smooth animations.

## 🚀 Deployment

The app is deployed on **Vercel**. You can deploy your version by:

1. **Pushing your code to GitHub**
2. **Connecting your repository to Vercel**
3. **Deploying with default settings**
