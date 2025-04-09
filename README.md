

## ⚡ Installation Steps

### **Prerequisites**

It is highly recommended that you use [Node Version Manager to install and manage your versions](https://nodejs.org/en/download) of Node and NPM.
To run this project you will need:
- Node.js (LTS recommended), the javascript runtime environment.
- npm, the node package manager which installs and manages dependencies.

### **Clone the Repository and Install Dependencies**
- Set up an ssh key on gitlab -> [Docs here](https://docs.gitlab.com/user/ssh/)
- Using your terminal, navigate to an appropriate directory on your computer.
- run `git clone git@gitlab.com:tsnr-inc/hackerthon-setups/react-front-end.git`
- run `cd react-front-end`
- run `npm install` -> This installs your dependencies in the /node_modules folder.

### **Running the server**
- run `npm run dev` -> This will start a dev server for your project.
- The website should be accessible [here](http://localhost:5173) in your browser.

## 🛠️ Core Technologies

### **This project is built using the following technologies:**

- **[React](https://react.dev/)** – A JavaScript library for building user interfaces.
- **[React Router](https://reactrouter.com/)** – A declarative routing solution for React applications.
- **[Tailwind CSS](https://tailwindcss.com/)** – A utility-first CSS framework for rapid UI development.
- **[Vite](https://vitejs.dev/)** – A fast and modern frontend build tool.
- **[TypeScript](https://www.typescriptlang.org/)** – A strongly typed programming language that builds on JavaScript.
- **[Redux](https://redux.js.org/)** – A library for predictable state management.

## 📁 Folder Descriptions

- **`assets/`** → Contains images, fonts, and other static assets.
- **`components/`** → Houses reusable UI components (e.g., buttons, modals).
- **`layouts/`** → Defines app layouts like navigation bars, footers, etc.
- **`pages/`** → Stores main pages (e.g., `Home.tsx`, `About.tsx`).
- **`hooks/`** → Custom React hooks for reusable logic.
- **`redux/`** → State management using Redux.
- **`services/`** → API service functions for backend interactions.
- **`utils/`** → Helper functions (e.g., formatting, debouncing).
- **`types/`** → TypeScript interfaces and types.
- **`config/`** → Configuration files (e.g., API base URLs, environment variables).