# ISTOS - Cryptocurrency Exchange Platform

A modern, MiCAR-compliant cryptocurrency exchange platform built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Charts:** Recharts
- **Animations:** Framer Motion

## 🎨 Design System

### Brand Colors
- **Primary Orange:** `#FF6B00`
- **Gold:** `#D4AF37`
- **Dark Background:** `#0A0A0A`
- **Success:** `#00C896`
- **Error:** `#FF3B30`

### Typography
- **Headings/Buttons:** Proxima Nova
- **Body:** Source Sans 3

### Design Patterns
- Glassmorphism cards with backdrop blur
- Orange-to-gold gradient accents
- Dark theme with high contrast
- MiCAR compliance indicators
- Verification gates for protected features

## 📁 Project Structure

```
/app
  /(auth)           - Authentication pages
  /(dashboard)      - Main app pages
  /components       - Reusable components
    /ui             - Core UI components
  /lib              - Utilities, API clients
  /styles           - Global styles
  /public           - Static assets
```

## 🧩 Core Components

### UI Components
- `<Button />` - Multiple variants with gradient support
- `<Card />` - Glassmorphism cards
- `<Navigation />` - Top navigation with ISTOS branding
- `<Sidebar />` - Collapsible dashboard sidebar
- `<Table />` - Data tables with sorting and filtering
- `<StatsCard />` - Dashboard metrics display
- `<EmptyState />` - "No data" states
- `<VerificationGate />` - KYC requirement overlays
- `<GradientText />` - Orange-to-gold gradient text

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Dependencies

### Production
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety
- `lucide-react` - Icon library
- `recharts` - Chart components
- `framer-motion` - Animations
- `@radix-ui/*` - Accessible UI primitives
- `clsx` & `tailwind-merge` - Class name utilities

### Development
- `tailwindcss` - Utility-first CSS
- `postcss` & `autoprefixer` - CSS processing
- `@types/*` - TypeScript definitions

## 🔒 Security & Compliance

- MiCAR compliant architecture
- KYC/AML verification flows
- Secure authentication patterns
- EU regulatory compliance indicators

## 📝 License

Private - ISTOS Platform

## 🤝 Contributing

This is a proprietary project. Contact the team for contribution guidelines.
