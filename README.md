# EaseUp Website

A modern, responsive web application for EaseUp - a dynamic service provider that connects clients with skilled handymen for all their home improvement needs.

## 🏠 About EaseUp

EaseUp streamlines the process of connecting clients with skilled professionals for various home services including:

- Plumbing
- Electrical work
- Tiling
- Painting
- Carpentry
- And more...

Our mission is to make life easier for customers while creating job opportunities for talented tradespeople through our innovative mobile applications, **Beaver** and **Beaver Pro**.

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Built with Tailwind CSS and Framer Motion for smooth animations
- **Interactive Sections**:
  - Hero section with compelling service introduction
  - About section explaining EaseUp's mission
  - Product showcase for Beaver and Beaver Pro apps
  - FAQ section for common queries
  - Contact form powered by EmailJS
- **Dark Mode Support**: Theme customization using CSS variables
- **Type-Safe**: Built with TypeScript for better code quality
- **SEO Optimized**: Next.js 14 with optimized fonts and images

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Font**: [Geist Font Family](https://vercel.com/font)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **npm**, **yarn**, **pnpm**, or **bun**: Package manager of your choice

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/asare-21/Easeup-website.git
cd Easeup-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-reload when you make changes to the source files.

### Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Running Production Build

After building, start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## 📁 Project Structure

```
Easeup-website/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── products/   # Products page
│   │   ├── page.tsx    # Home page
│   │   ├── layout.tsx  # Root layout
│   │   └── globals.css # Global styles
│   ├── components/     # React components
│   │   ├── home/       # Home page components
│   │   ├── products/   # Products page components
│   │   └── ui/         # Reusable UI components
│   ├── contents/       # Content configuration files
│   ├── hooks/          # Custom React hooks
│   └── lib/            # Utility functions
├── components.json     # shadcn/ui configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── next.config.js      # Next.js configuration
```

## 🌐 Pages

- **Home** (`/`): Landing page with hero, about, apps showcase, FAQ, and contact sections
- **Products** (`/products`): Detailed information about Beaver and Beaver Pro mobile applications

## 🎨 Customization

### Theme Colors

Theme colors can be customized in `src/app/globals.css` using CSS variables:

```css
:root {
  --background: ...
  --foreground: ...
  --primary: ...
  /* etc. */
}
```

### Content

- Navigation links: `src/contents/nav.ts`
- FAQ content: `src/contents/faq.ts`

## 📦 Dependencies

### Main Dependencies
- `next`: React framework for production
- `react` & `react-dom`: UI library
- `typescript`: Type safety
- `tailwindcss`: Utility-first CSS framework
- `framer-motion`: Animation library
- `@emailjs/browser`: Email integration
- `@radix-ui/*`: Accessible UI components
- `lucide-react`: Icon library

### Dev Dependencies
- `eslint` & `eslint-config-next`: Code linting
- `autoprefixer` & `postcss`: CSS processing
- TypeScript type definitions

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

### Deploy on Azure Static Web Apps

This project includes an Azure Static Web Apps workflow configuration for deployment to Azure.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Steps to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the terms specified in the repository.

## 📞 Contact

For more information about EaseUp services, please visit our website or contact us through the contact form on the site.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**EaseUp** - Connecting You with Skilled Handymen for All Your Home Improvement Needs
