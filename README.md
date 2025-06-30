# 🍽️ ChefMate

**ChefMate** is a modern cooking and recipe discovery app built with React and Tailwind CSS. It allows users to search for recipes, filter by dietary preferences, adjust serving sizes dynamically, and enjoy a clean, minimalist UI. The app fetches real recipes using the Spoonacular API.

> 🚀 Live Demo: [https://swatikumari18.github.io/chefmate/](https://swatikumari18.github.io/chefmate/)

---

## ✨ Features

- 🔍 **Recipe Search** – Search recipes using keywords
- 🍃 **Diet Filters** – Filter by All, Vegan, Vegetarian, or Non-Veg
- 🍽️ **Serving Size** – Adjust serving size and see ingredient updates instantly
- 📷 **Image Fallback** – Skips recipes with missing images
- 🧠 **Future Ready** – Structure supports AI recipe generation
- 💅 **Modern Design** – Inspired by [Minimalist Baker](https://minimalistbaker.com/)
- 📱 **Responsive Layout** – Works great on mobile, tablet, and desktop
- 🔁 Pagination and loading spinners

---

## 🛠️ Tech Stack

| Part       | Tech                        |
|------------|-----------------------------|
| Frontend   | React + Vite                |
| Styling    | Tailwind CSS                |
| API        | Spoonacular API             |
| Deployment | GitHub Pages                |
| Extras     | LocalStorage, OpenAI-ready  |

---

## ⚙️ Getting Started

### 📦 Install & Run Locally

```bash
git clone https://github.com/SwatiKumari18/chefmate.git
cd chefmate
npm install
npm run dev
```

---

## 🚀 Deploy to GitHub Pages

To deploy your app to GitHub Pages, follow these steps:

```bash
npm run deploy
```

Make sure your vite.config.js file includes:

```bash
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/chefmate/',
  plugins: [react()],
});
```

---

## 🙋‍♀️ Author

**Swati Kumari**  
🔗 [LinkedIn](https://linkedin.com/in/swatikumari-b2b654229)  
📫 swatikumari90151@gmail.com

---

## 📄 License

This project is licensed under the **MIT License**.

---

> 🧁 Built with 💚 by Swati – a cooking & coding enthusiast!






