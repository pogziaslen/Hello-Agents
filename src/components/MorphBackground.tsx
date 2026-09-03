import { useEffect, useRef } from "react";

/**
 * MorphBackground: a full-viewport canvas that paints "metamorphosizing
 * minimalist vector shapes" using the Superformula. Smooth, elastic,
 * continuous morphing between round, square, star and spiky silhouettes,
 * plus drifting dots, on a vibrant acid-yellow field. Runs at 60fps.
 */

type Blob = {
  x: number;
  y: number;
  base: number;
  m: number; // symmetry
  n1Base: number; n1Amp: number; n1Freq: number; n1Phase: number;
  n2Base: number; n2Amp: number; n2Freq: number; n2Phase: number;
  n3Base: number; n3Amp: number; n3Freq: number; n3Phase: number;
  aBase: number; aAmp: number; aFreq: number; aPhase: number;
  bBase: number; bAmp: number; bFreq: number; bPhase: number;
  rot: number;
  rotSpeed: number;
  alpha: number;
  fill: string;
  strokeOnly: boolean;
};

type Dot = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  vx: number;
  vy: number;
  phase: number;
  freq: number;
};

function superformula(m: number, n1: number, n2: number, n3: number, a: number, b: number, angle: number) {
  const t1 = Math.abs(Math.cos((m * angle) / 4) / a) ** n2;
  const t2 = Math.abs(Math.sin((m * angle) / 4) / b) ** n3;
  const d = t1 + t2;
  if (d === 0) return 0;
  return Math.pow(d, -1 / n1);
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function MorphBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const blobs: Blob[] = [];
    const dots: Dot[] = [];

    const palette = [
      { fill: "rgba(10,10,10,", strokeOnly: false },
      { fill: "rgba(24,28,0,", strokeOnly: false },
      { fill: "rgba(20,20,20,", strokeOnly: true },
    ];

    function build() {
      blobs.length = 0;
      dots.length = 0;

      const count = width < 640 ? 5 : 7;
      const mChoices = [2, 3, 4, 5, 6, 7];
      for (let i = 0; i < count; i++) {
        const p = palette[i % palette.length];
        blobs.push({
          x: rand(0, width),
          y: rand(0, height),
          base: rand(Math.min(width, height) * 0.12, Math.min(width, height) * 0.3),
          m: mChoices[Math.floor(rand(0, mChoices.length))],
          n1Base: rand(1.5, 5), n1Amp: rand(1, 3.5), n1Freq: rand(0.15, 0.5), n1Phase: rand(0, Math.PI * 2),
          n2Base: rand(1, 6), n2Amp: rand(0.5, 5), n2Freq: rand(0.1, 0.4), n2Phase: rand(0, Math.PI * 2),
          n3Base: rand(1, 6), n3Amp: rand(0.5, 5), n3Freq: rand(0.1, 0.4), n3Phase: rand(0, Math.PI * 2),
          aBase: rand(0.9, 1.1), aAmp: rand(0.1, 0.3), aFreq: rand(0.1, 0.3), aPhase: rand(0, Math.PI * 2),
          bBase: rand(0.9, 1.1), bAmp: rand(0.1, 0.3), bFreq: rand(0.1, 0.3), bPhase: rand(0, Math.PI * 2),
          rot: rand(0, Math.PI * 2),
          rotSpeed: rand(-0.05, 0.05),
          alpha: p.strokeOnly ? rand(0.16, 0.3) : rand(0.05, 0.13),
          fill: p.fill,
          strokeOnly: p.strokeOnly,
        });
      }

      const dotCount = width < 640 ? 14 : 22;
      for (let i = 0; i < dotCount; i++) {
        dots.push({
          x: rand(0, width),
          y: rand(0, height),
          r: rand(2, 6),
          alpha: rand(0.1, 0.4),
          vx: rand(-0.15, 0.15),
          vy: rand(-0.15, 0.15),
          phase: rand(0, Math.PI * 2),
          freq: rand(0.3, 1.2),
        });
      }
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function drawShape(b: Blob, t: number) {
      const n1 = b.n1Base + b.n1Amp * Math.sin(t * b.n1Freq + b.n1Phase);
      const n2 = b.n2Base + b.n2Amp * Math.sin(t * b.n2Freq + b.n2Phase);
      const n3 = b.n3Base + b.n3Amp * Math.sin(t * b.n3Freq + b.n3Phase);
      const a = b.aBase + b.aAmp * Math.sin(t * b.aFreq + b.aPhase);
      const bb = b.bBase + b.bAmp * Math.sin(t * b.bFreq + b.bPhase);

      const samples = 90;
      ctx!.beginPath();
      for (let k = 0; k <= samples; k++) {
        const ang = (k / samples) * Math.PI * 2;
        let r = superformula(b.m, n1, n2, n3, a, bb, ang + b.rot);
        if (!isFinite(r)) r = 1;
        r = Math.min(r, 2.4);
        const px = b.x + Math.cos(ang) * r * b.base;
        const py = b.y + Math.sin(ang) * r * b.base;
        if (k === 0) ctx!.moveTo(px, py);
        else ctx!.lineTo(px, py);
      }
      ctx!.closePath();

      if (b.strokeOnly) {
        ctx!.strokeStyle = b.fill + (b.alpha) + ")";
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
      } else {
        ctx!.fillStyle = b.fill + b.alpha + ")";
        ctx!.fill();
      }
    }

    function frame(time: number) {
      const t = time / 1000;
      // acid-yellow field
      ctx!.clearRect(0, 0, width, height);

      for (const b of blobs) {
        b.rot += b.rotSpeed;
        drawShape(b, t);
      }

      // drifting dots (the "dot" motif that echoes the bee reveal)
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -10) d.x = width + 10;
        if (d.x > width + 10) d.x = -10;
        if (d.y < -10) d.y = height + 10;
        if (d.y > height + 10) d.y = -10;
        const pulse = 1 + 0.35 * Math.sin(t * d.freq + d.phase);
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, d.r * pulse, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(10,10,10," + d.alpha + ")";
        ctx!.fill();
      }

      if (!reduced) requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      // draw a single static frame
      frame(0);
    } else {
      requestAnimationFrame(frame);
    }

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-full w-full"
      style={{ background: "linear-gradient(180deg,#e3ff1f 0%, #d8f600 40%, #cfe900 100%)" }}
    />
  );
}
