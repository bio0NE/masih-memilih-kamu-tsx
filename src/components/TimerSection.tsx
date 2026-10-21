import { useEffect, useState } from "react";
import SectionLabel from "./SectionLabel";
type Elapsed = { days: string; hours: string; minutes: string; seconds: string };
function getElapsed(): Elapsed {
  const start = new Date(2024, 6, 20, 0, 0, 0, 0).getTime();
  const total = Math.max(0, Math.floor((Date.now() - start) / 1000));
  return {
    days: Math.floor(total / 86400).toLocaleString("id-ID"),
    hours: String(Math.floor((total % 86400) / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((total % 3600) / 60)).padStart(2, "0"),
    seconds: String(total % 60).padStart(2, "0"),
  };
}
export default function TimerSection() {
  const [elapsed, setElapsed] = useState<Elapsed>(() => getElapsed());
  useEffect(() => { const id = window.setInterval(() => setElapsed(getElapsed()), 1000); return () => window.clearInterval(id); }, []);
  const units: { key: keyof Elapsed; label: string }[] = [{key:"days",label:"Hari"},{key:"hours",label:"Jam"},{key:"minutes",label:"Menit"},{key:"seconds",label:"Detik"}];
  return <section className="time-section" id="waktu" aria-labelledby="time-title">
    <div className="time-decoration" aria-hidden="true">♡</div><SectionLabel>03 / Sejak hari itu</SectionLabel><h2 className="reveal" id="time-title">Waktu yang sudah kita bagi.</h2><p className="time-intro reveal">Sejak 20 Juli 2024, sampai detik ini.</p>
    <div className="timer reveal" role="timer" aria-label="Waktu yang telah berlalu sejak 20 Juli 2024">{units.map(({key,label}) => <div className="timer-unit" key={key}><span className="timer-number">{elapsed[key]}</span><span className="timer-label">{label}</span></div>)}</div>
    <p className="date-stamp reveal">20 JULI 2024 · TERUS BERJALAN</p>
  </section>;
}
