# React TypeScript Multi-Database Template

A modern React template with TypeScript, Vite, and support for multiple database providers.

## Features

- ⚡️ Vite for fast development and building
- 🔷 TypeScript for type safety
- 🎨 TailwindCSS for styling
- 📦 Multiple database support (Dexie.js, Supabase)
- 🔧 ESLint + Prettier for code quality
- 📱 Responsive design ready

## Getting Started

1. Clone this template
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start development server:
   ```bash
   pnpm dev
   ```

## Database Configuration

This template supports two database providers:

### Dexie.js (IndexedDB)
- Local-first database
- No configuration needed
- Great for offline-capable apps

### Supabase
1. Copy .env.example to .env
2. Add your Supabase credentials
3. Initialize with Supabase in App.tsx

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── lib/
  │   └── database/  # Database providers
  ├── hooks/         # Custom React hooks
  ├── App.tsx        # Main application
  └── main.tsx       # Entry point
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## License

MIT
