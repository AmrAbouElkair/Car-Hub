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

<details>
<summary><code>constants.ts</code></summary>

```typescript
export const manufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* START: General styles */
.max-width {
  @apply mx-auto max-w-[1440px];
}

.flex-center {
  @apply flex items-center justify-center;
}

.flex-between {
  @apply flex items-center justify-between;
}

.custom-btn {
  @apply relative flex flex-row items-center justify-center px-6 py-3 outline-none;
}
/* END: General styles */

/* START: Hero styles */
.hero {
  @apply relative z-0 mx-auto flex max-w-[1440px] flex-col gap-5 xl:flex-row;
}

.hero__title {
  @apply text-[50px] font-extrabold sm:text-[64px] 2xl:text-[72px];
}

.hero__subtitle {
  @apply text-black-100 mt-5 text-[27px] font-light;
}

.hero__image-container {
  @apply flex w-full items-end justify-end xl:h-screen xl:flex-[1.5];
}

.hero__image {
  @apply relative z-0 h-[590px] w-[90%] xl:h-full xl:w-full;
}

.hero__image-overlay {
  @apply bg-hero-bg absolute -right-1/4 -z-10 h-[590px] w-full overflow-hidden bg-repeat-round xl:-right-1/2 xl:-top-24 xl:h-screen;
}
/* END: Hero styles */

/* START: Home styles */

.home__text-container {
  @apply text-black-100 flex flex-col items-start justify-start gap-y-2.5;
}

.home__filters {
  @apply mt-12 flex w-full flex-wrap items-center justify-between gap-5 max-[1111px]:justify-center max-sm:px-5;
}

.home__filter-container {
  @apply flex flex-wrap items-center justify-center gap-2 max-sm:w-full;
}

.home__cars-wrapper {
  @apply grid w-full grid-cols-1 gap-3 pt-14 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4;
}

.home__error-container {
  @apply mt-16 flex flex-col items-center justify-center gap-2;
}
/* END: Home styles */

/* START: Car Card styles */
.car-card {
  @apply bg-primary-blue-100 text-black-100 flex flex-col items-start justify-center rounded-3xl p-6 hover:bg-white hover:shadow-md;
}

.car-card__content {
  @apply flex w-full items-start justify-between gap-2;
}

.car-card__content-title {
  @apply text-[22px] font-bold capitalize leading-[26px];
}

.car-card__price {
  @apply mt-6 flex text-[32px] font-extrabold leading-[38px];
}

.car-card__price-dollar {
  @apply self-start text-[14px] font-semibold leading-[17px];
}

.car-card__price-day {
  @apply self-end text-[14px] font-medium leading-[17px];
}

.car-card__image {
  @apply relative my-3 h-40 w-full object-contain;
}

.car-card__icon-container {
  @apply text-grey flex w-full justify-between group-hover:invisible;
}

.car-card__icon {
  @apply flex flex-col items-center justify-center gap-2;
}

.car-card__icon-text {
  @apply text-[14px] leading-[17px];
}

.car-card__btn-container {
  @apply absolute bottom-0 z-10 hidden w-full group-hover:flex;
}
/* END: Car Card styles */

/* START: Car Details styles */
.car-details__dialog-panel {
  @apply relative flex max-h-[90vh] w-full max-w-lg transform flex-col gap-5 overflow-y-auto rounded-2xl bg-white p-6 text-left shadow-xl transition-all;
}

.car-details__close-btn {
  @apply bg-primary-blue-100 absolute right-2 top-2 z-10 w-fit rounded-full p-2;
}

.car-details__main-image {
  @apply bg-pattern relative h-40 w-full rounded-lg bg-cover bg-center;
}
/* END: Car Details styles */

/* START: Custom Filter styles */
.custom-filter__btn {
  @apply relative flex w-full min-w-[127px] cursor-default items-center justify-between rounded-lg border bg-white px-3 py-2 text-left shadow-md sm:text-sm;
}

.custom-filter__options {
  @apply absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
}
/* END: Custom Filter styles */

/* START: Footer styles */
.footer {
  @apply text-black-100 mt-5 flex  flex-col border-t border-gray-100;
}

.footer__links-container {
  @apply flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16;
}

.footer__rights {
  @apply flex flex-col items-start justify-start gap-6;
}

.footer__links {
  @apply flex w-full flex-1 flex-wrap gap-20 max-md:mt-10 md:justify-end;
}

.footer__link {
  @apply flex min-w-[170px] flex-col gap-6 text-base;
}

.footer__copyrights {
  @apply mt-10 flex flex-wrap items-center justify-between border-t border-gray-100 px-6 py-10 sm:px-16;
}

.footer__copyrights-link {
  @apply flex flex-1 justify-center gap-10 max-sm:mt-4 sm:justify-end;
}
/* END: Footer styles */
ّ
/* START: search manufacturer styles */
.search-manufacturer {
  @apply flex flex-1 items-center justify-start max-sm:w-full;
}

.search-manufacturer__input {
  @apply bg-light-white h-[48px] w-full cursor-pointer rounded-l-full p-4 pl-12 text-sm outline-none max-sm:rounded-full;
}

.search-manufacturer__options {
  @apply absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
}

.search-manufacturer__option {
  @apply cursor-default select-none py-2 pl-10 pr-4;
}
/* END: search manufacturer styles */
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
