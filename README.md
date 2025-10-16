# Stookiez Cookiez Website

A beautiful, modern website for Stookiez Cookiez - specializing in gourmet brown butter cookies.

## Features

- Responsive design that works on all devices
- Hero section with beautiful imagery
- Complete flavours showcase
- Pricing information with delivery options
- Contact section with multiple ways to reach out
- Smooth scrolling navigation
- Custom color scheme matching the brand

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 19** - UI library

## Getting Started

### Development

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
stookiezcookiez/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page with all sections
├── public/
│   ├── cookies.jpeg     # Hero image
│   ├── logo with words.png
│   └── logo no words.png
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Sections

1. **Navigation** - Fixed header with smooth scroll links
2. **Hero** - Eye-catching introduction with call-to-action buttons
3. **About** - Brief description of Stookiez Cookiez
4. **Flavours** - Showcases all 5 cookie flavours
5. **Pricing** - Pricing tiers and delivery information
6. **Contact** - Contact information (phone, email, Instagram)
7. **Footer** - Brand information

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts`:
- `cream`: #FFF8E7 (background)
- `warm-brown`: #8B4513
- `cookie-brown`: #D2691E
- `dark-brown`: #3E2723 (text)

### Content

All content is in `app/page.tsx` and can be easily updated.

## Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- Any platform supporting Next.js

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## License

© 2025 Stookiez Cookiez. All rights reserved.
