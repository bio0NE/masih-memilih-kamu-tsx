import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import SectionLabel from "./SectionLabel";
type FloatingHeart = { id: number; left: number; delay: number; drift: number };
const INITIAL_LABEL = "Ada satu hal yang ingin kuingat";
const REVEALED_LABEL = "Simpan kalimat ini";
export default function ClosingSection() {
  const [showMessage, setShowMessage] = useState(false);
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const nextId = useRef(0);
  const reducedMotion = useRef(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = media.matches;
    const update = (event: MediaQueryListEvent) => { reducedMotion.current = event.matches; };
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => { if (!hearts.length) return; const id = window.setTimeout(() => setHearts([]), 3400); return () => window.clearTimeout(id); }, [hearts]);
  function toggleMessage() {
    const next = !showMessage;
    setShowMessage(next);
    if (next && !reducedMotion.current) setHearts(Array.from({length:7}, () => ({id:nextId.current++,left:15+Math.random()*70,delay:Math.random()*.45,drift:Math.round(Math.random()*90-45)})));
    else setHearts([]);
  }
  return <section className="closing dark-scene" id="langkah" aria-labelledby="closing-title">
    <div className="closing-glow parallax" data-speed="0.12" aria-hidden="true"/><div className="closing-orbit closing-orbit-a" aria-hidden="true"/><div className="closing-orbit closing-orbit-b" aria-hidden="true"/>
    <div className="closing-content"><SectionLabel>05 / Langkah berikutnya</SectionLabel>
      <h2 className="closing-title reveal" id="closing-title"><span>Bukan kembali</span><em>seperti dulu.</em><span>Tapi tumbuh.</span></h2>
      <p className="closing-copy reveal">Mungkin kita tidak bisa menghapus semua yang sudah menyakitkan. Tapi kalau kita berdua bersedia, kita bisa belajar membuat hari-hari berikutnya terasa lebih sehat, lebih jujur, dan lebih hangat.</p>
      <button className="letter-toggle reveal" type="button" aria-expanded={showMessage} aria-controls="hiddenMessage" onClick={toggleMessage}>{showMessage ? REVEALED_LABEL : INITIAL_LABEL}</button>
      {showMessage && <div className="hidden-message" id="hiddenMessage"><p>Kita tidak sedang berada di cerita yang mudah. Tapi di antara kecewa, lelah, dan hal-hal yang belum selesai, aku masih ingin mencari jalan pulang yang sama denganmu</p></div>}
      <div className="floating-hearts" aria-hidden="true">{hearts.map(heart => <span className="floating-heart" key={heart.id} style={{left:`${heart.left}%`,animationDelay:`${heart.delay}s`,"--drift":`${heart.drift}px`} as CSSProperties}>♡</span>)}</div>
    </div>
  </section>;
}
