import { useEffect } from "react";

export function usePageEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const progress = document.getElementById("progressBar");
    const glow = document.querySelector<HTMLElement>(".cursor-glow");
    const layers = Array.from(document.querySelectorAll<HTMLElement>(".parallax"));
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let scrollFrame = 0;
    let pointerFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const observer = "IntersectionObserver" in window && !reducedMotion.matches
      ? new IntersectionObserver((entries, currentObserver) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              currentObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" })
      : null;
    if (observer) revealItems.forEach((item) => observer.observe(item));
    else revealItems.forEach((item) => item.classList.add("is-visible"));

    const updateScroll = () => {
      const top = window.scrollY || document.documentElement.scrollTop;
      const range = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.width = `${range > 0 ? Math.min(1, Math.max(0, top / range)) * 100 : 0}%`;
      if (!reducedMotion.matches) {
        layers.forEach((layer) => {
          const section = layer.closest("section");
          if (!section) return;
          const rect = section.getBoundingClientRect();
          const sectionProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const offset = (sectionProgress - 0.5) * window.innerHeight * Number(layer.dataset.speed || 0);
          layer.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
        });
      } else {
        layers.forEach((layer) => layer.style.removeProperty("--parallax-offset"));
      }
      scrollFrame = 0;
    };
    const onScroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); };
    const onPointer = (event: PointerEvent) => {
      pointerX = event.clientX; pointerY = event.clientY;
      if (!pointerFrame) pointerFrame = requestAnimationFrame(() => {
        if (glow) { glow.style.left = `${pointerX}px`; glow.style.top = `${pointerY}px`; }
        pointerFrame = 0;
      });
    };
    const cursorSupported = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (cursorSupported && !reducedMotion.matches) window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateScroll();
    const onMotionChange = () => {
      if (reducedMotion.matches) {
        layers.forEach((layer) => layer.style.removeProperty("--parallax-offset"));
        revealItems.forEach((item) => item.classList.add("is-visible"));
      }
    };
    reducedMotion.addEventListener("change", onMotionChange);
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointer);
      reducedMotion.removeEventListener("change", onMotionChange);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
    };
  }, []);
}
