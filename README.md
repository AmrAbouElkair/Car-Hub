  <div align="center">
  <img src="https://github.com/AmrAbouElkair/Car-Hub/assets/83710148/23643079-d20e-4658-9071-e92de6a09713" alt="mainImg"/>
  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
 <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
  </div>

## 📋 <a name="table">Table of Contents</a>

1. ![idea](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/c8e0ad20-4a63-4fa0-8c4f-6c8368ed0adf) [Introduction](#introduction)
2. 🤖 [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 📷 [Screenshots](#screenshots)
7. ![jigsaw (1)](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/316cd490-12f9-4b15-9977-f0d202c1d150) [Contribute](#contribute)

Car Hub, a responsive landing page designed to captivate and engage automotive enthusiasts and businesses. In an era where digital presence defines success, Car Hub stands as a testament to what can be achieved with modern web technologies and a passion for the automotive industry.

**Here is a live preview for the project _[Car Hub](https://car-hub-wheat-mu.vercel.app/)_!**

## <a name="introduction"> ![idea](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/c8e0ad20-4a63-4fa0-8c4f-6c8368ed0adf) Introduction</a>

Developed using NextJS, styled with Tailwind CSS, animated with Framer Motion, and enhanced with NextUI components, Car Hub is not just a website; it's an experience. Its responsive design ensures that it delivers its message effectively, regardless of the device used to access it. The use of Framer Motion injects life into the page, making interactions memorable and engaging.

## <a name="tech-stack">🤖 Tech Stack</a>

- NextJS
- TypeScript
- Tailwind CSS
- NextUI

## <a name="features">🔋 Features</a>

👉 **Home Page**: Showcases a visually appealing display of cars fetched from a third-party API, providing a captivating introduction to the diverse range of vehicles available.

👉 **Exploration and Filtering**: Explore a wide variety of cars from around the world, utilizing a search and filter system based on criteria such as model, manufacturer, year, fuel type, and make.

👉 **Pagination**: For easy navigation through a large dataset of cars, allowing users to explore multiple pages effortlessly.

👉 **TypeScript Types**: Utilize TypeScript to provide robust typing for enhanced code quality and better development

👉 **Responsive Website Design**: The website is designed to be visually pleasing and responsive, ensuring an optimal user experience across various devices.

👉 **Metadata Optimization and SEO**: Optimize metadata for car listing, enhancing search engine optimization (SEO) and ensuring better visibility on search engine results pages.

👉 **Animation**: With the aid of NextUI Libaray, make the most of Framer Motion's features to create stunning animation.

👉 **Design Pattern**: Observing the principles of React Architecture and the Design pattern

👉 **Pnpm Package Manager**: Pnpm is utilized since it is significantly quicker and more reliable than yarn and npm.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [pnpm](https://pnpm.io/)

**Cloning the Repository**

```bash
git clone https://github.com/AmrAbouElkair/Car-Hub.git
cd Car-Hub
```

**Installation**

Install the project dependencies using npm:

```bash
pnpm inatall or npm install
```

**Running the Project**

```bash
pnpm dev or npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

```

</details>

## <a name="screenshots"> 📷 Screenshots</a>

![car1](https://github.com/AmrAbouElkair/Car-Hub/assets/83710148/23643079-d20e-4658-9071-e92de6a09713)
![car2](https://github.com/AmrAbouElkair/Car-Hub/assets/83710148/70fc7902-f761-41c8-b432-c7c82a5ecf2a)
![car3](https://github.com/AmrAbouElkair/Car-Hub/assets/83710148/31a0e9ef-8cb9-48a5-9b97-bfacda6e0e7e)
![car4](https://github.com/AmrAbouElkair/Car-Hub/assets/83710148/2cc9d12e-d5b6-43af-bbac-fce44cf73c55)
![car5](https://github.com/AmrAbouElkair/Car-Hub/assets/83710148/93ab097a-a16e-47d2-a9ca-7d97561225bd)

## <a name="contribute">![jigsaw](https://github.com/AmrAbouElkair/LensCrafters/assets/83710148/fa2848f1-94b6-4951-9334-fb9ec40c16a7) Contribute</a>

1. Fork the Project
2. Create your Feature Branch (git checkout -b `new branch`)
3. Commit your Changes (git commit -m 'Add some `commit name`)
4. Push to the Branch (git push origin `new branch`)
5. Open a Pull Request
