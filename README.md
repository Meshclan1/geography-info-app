# 🌍 ExploreWorld

A Next.js 15 app that allows users to explore countries, their cities, and get real-time weather and demographic data. This project demonstrates dynamic routing, API fetching, server components, and a clean modular structure!

---

## 🚀 Features

- ✅ View a list of countries with flags and key details  
- ✅ Dynamic route for country pages (`/country/[name]`)  
- ✅ Nested dynamic route for cities (`/country/[name]/[city]`)  
- ✅ API integration (REST Countries, GeoDB Cities, OpenWeather)  
- ✅ Server components for data fetching  
- ✅ Custom API route handlers with error handling  
- ✅ Type-safe data handling using TypeScript  
- ✅ Modular project structure using `features/`, `lib/`, `api/`

---

## 🛠 Tech Stack

- **Next.js 15 (App Router)**
- **TypeScript**
- **REST Countries API** - https://restcountries.com
- **GeoDB Cities API** (via RapidAPI) - https://rapidapi.com/wirefreethought/api/geodb-cities
- **OpenWeather API** - https://openweathermap.org
- **Tailwind CSS** (optional for styling)
- **Zod** (optional for schema validation)

---

## 📁 Project Structure

/app
/country
/[name]
/[city]
page.tsx # City weather & info page
page.tsx # Country details + cities list
page.tsx # Landing page with all countries

/api
/fetchCities/route.ts # Example API handler

/features
/countries
fetchCountries.ts # Logic to get all countries
/cities
fetchCities.ts # Logic to get cities by country
/weather
fetchWeather.ts # Logic to fetch weather info

/lib
types.ts # Shared types/interfaces
constants.ts # Reusable constants


---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
