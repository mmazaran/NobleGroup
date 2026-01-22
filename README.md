# Noble Group

A premium marketing agency website for real estate professionals, builders, and developers.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mmazaran/NobleGroup.git
cd NobleGroup
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file (see `.env.example` for reference):
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
noble-group/
├── components/           # React components
│   ├── magicui/         # Custom UI animation components
│   ├── About.tsx        # About page
│   ├── CaseStudies.tsx  # Case studies showcase
│   ├── CTA.tsx          # Lead capture form
│   ├── Hero.tsx         # Landing hero section
│   ├── Navbar.tsx       # Navigation
│   ├── Services.tsx     # Services page
│   └── ...
├── lib/                 # Utility functions
├── App.tsx              # Main application
├── index.tsx            # Entry point
└── index.html           # HTML template
```

## External Integrations

- **Calendly** - Booking/scheduling
- **ElevenLabs ConvAI** - AI chatbot widget
- **Lead Connector HQ** - Form submissions

## License

All rights reserved.
