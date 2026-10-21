
import { useEffect, useRef, type CSSProperties } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let frame = 0;

    const updateScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();

        const progress = Math.min(
          1,
          Math.max(0, -rect.top / window.innerHeight)
        );

        hero.style.setProperty(
          "--scroll-progress",
          String(progress)
        );
      });
    };

    if (!reducedMotion.matches) {
      window.addEventListener("scroll", updateScroll, {
        passive: true,
      });
    }

    updateScroll();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero dark-scene"
      id="home"
      aria-labelledby="hero-title"
    >
      {/* Single background image */}
      <div className="hero-background" aria-hidden="true" />

      {/* Subtle overlay for text readability */}
      <div className="hero-overlay" aria-hidden="true" />

      <header className="site-meta" aria-label="Informasi website">
        <a className="wordmark" href="#home">
          Catatan untuk kita
        </a>

        <span>
          20 Juli 2024 — selamanya, jika kita terus memilih
        </span>
      </header>

      {/* Keep the animated wind */}
      <div className="wind-field" aria-hidden="true">
        {Array.from({ length: 16 }, (_, i) => (
          <span
            className="wind-particle"
            key={i}
            style={
              {
                "--i": i,
                "--delay": `${(i % 8) * -1.7}s`,
                "--duration": `${9 + (i % 6) * 2}s`,
                "--top": `${8 + ((i * 17) % 82)}%`,
                "--size": `${1 + (i % 3) * 0.7}px`,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* Optional subtle film grain */}
      <div className="grain" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">
          Untuk seseorang yang masih ingin kuperjuangkan
        </p>

        <h1 id="hero-title">
          <span className="headline-line">
            <span>Masih</span>
          </span>

          <span className="headline-line rose-line">
            <span>memilih</span>
          </span>

          <span className="headline-line">
            <span>kamu.</span>
          </span>
        </h1>

        <p className="hero-copy">
          Jangan biarkan luka-luka kita menjadi alasan untuk menjauh. Aku ingin kita tetap bersama, bukan karena takut kehilangan waktu yang sudah lewat, tapi karena kita sama-sama memilihnya.
        </p>
      </div>

      <a
        className="scroll-cue"
        href="#tentang"
        aria-label="Baca pelan-pelan, lanjut ke bagian Tentang kita"
      >
        <span className="scroll-line" aria-hidden="true" />
        <span>Baca pelan-pelan</span>
      </a>

      <span className="hero-index" aria-hidden="true">
        20 / 07 / 24
      </span>
    </section>
  );
}
