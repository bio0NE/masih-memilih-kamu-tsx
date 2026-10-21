import SectionLabel from "./SectionLabel";
import type { CSSProperties } from "react";

const memories = [
  {
    src: "/images/Photo2.png",
    caption: "Di saat kita bahagia.",
    date: "Tawangmangu, Rumah Atsiri",
    className: "polaroid-one",
    alt: "Kenangan kita yang pertama",
  },
  {
    src: "/images/photo1.png",
    caption: "Kita marah dan berdebat.",
    date: "Di rumahku",
    className: "polaroid-two",
    alt: "Senyum dalam sebuah kenangan",
  },
  {
    src: "/images/photo3.png",
    caption: "Berlibur bersama",
    date: "Keraton Ratu Boko",
    className: "polaroid-three",
    alt: "Momen indah yang ingin diingat",
  },
];

export default function MemorySection() {
  return (
    <section
      className="memory dark-scene"
      id="ingat"
      aria-labelledby="memory-title"
    >
      <div
        className="memory-light parallax"
        data-speed="0.13"
        aria-hidden="true"
      />

      <div
        className="memory-orbit memory-orbit-a parallax"
        data-speed="-0.07"
        aria-hidden="true"
      />

      <div
        className="memory-orbit memory-orbit-b parallax"
        data-speed="0.09"
        aria-hidden="true"
      />

      <div className="memory-inner">
        <SectionLabel>02 / Hal yang ingin kuingat</SectionLabel>

        <div className="memory-gallery" aria-label="Galeri kenangan">
          {memories.map((memory, index) => (
            <figure
              className={`memory-polaroid ${memory.className} reveal`}
              key={memory.src}
              style={{ "--photo-index": index } as CSSProperties}
            >
              <div className="polaroid-image">
                <img
                  src={memory.src}
                  alt={memory.alt}
                  loading="lazy"
                />
              </div>

              <figcaption className="polaroid-caption">
                <span className="polaroid-note">
                  {memory.caption}
                </span>
                <span className="polaroid-date">
                  {memory.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="memory-quote-wrap">
  <span className="quote-mark" aria-hidden="true">
    “
  </span>

  <h2 className="quote memory-quote-visible" id="memory-title">
    Aku tidak ingin kita hanya bertahan karena sudah sejauh
    ini. Aku ingin kita tetap bersama karena kita berdua
    masih mau berusaha.
  </h2>

  <p className="quote-attribution memory-quote-visible">
    — Dari aku, untuk kita
  </p>
</div>
      </div>

      <span className="memory-coordinate" aria-hidden="true">
        A MOMENT TO KEEP
      </span>


    </section>
  );
}