import { useEffect, useRef } from "react";
import "./MatrixRain.scss";
import React from "react";

function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas : HTMLCanvasElement | null = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    const width: number = (canvas.width = window.innerWidth);
    const height: number = (canvas.height = document.documentElement.scrollHeight);
    const letters: string =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    const fontSize: number = 10;
    const columns: number = width / fontSize;
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {

      if (!ctx) {
        return;
      }

      ctx.fillStyle = "#0f08230c";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const text: string = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#82dff6";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    const interval: ReturnType<typeof setInterval> = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, []);

  return <canvas className="matrixRain" ref={canvasRef} />;
}

export default MatrixRain;
