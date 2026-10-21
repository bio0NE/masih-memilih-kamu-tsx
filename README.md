# Masih Memilih Kamu

Responsive single-page React + TypeScript landing page. Each section is in its own `.tsx` component and composed in `src/App.tsx`.

## Run locally
Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Structure
- `src/components/HeroSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/MemorySection.tsx`
- `src/components/TimerSection.tsx`
- `src/components/LetterSection.tsx`
- `src/components/ClosingSection.tsx`
- `src/components/Footer.tsx`
- `src/hooks/usePageEffects.ts`

This remains one continuous landing page, not separate routes.
