import React, { useRef, useEffect } from "react";

interface SincWaveProps {
  color: string;
  thickness: number;
  scale: number;
  frequency: number;
  amplitudesMax: number[];
  animationSpeed: number;
  animationAmplitude: number;
}

const SincWave: React.FC<SincWaveProps> = ({
  color,
  thickness,
  scale,
  frequency,
  amplitudesMax,
  animationSpeed,
  animationAmplitude,
}) => {
  // Get canvas ref using useRef hook
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Get animation frame ID ref using useRef hook
  const animationFrameIdRef = useRef<number>();

  // Draw the waves using canvas context
  const drawWaves = (
    canvas: HTMLCanvasElement,
    waveColor: string,
    waveThickness: number,
    waveScale: number,
    waveFrequency: number,
    waveAmplitudes: number[]
  ) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let waveOpacity = 1;
    for (let i = 0; i < waveAmplitudes.length; i++) {
      ctx.beginPath();
      ctx.strokeStyle = waveColor;
      ctx.lineWidth = waveThickness;
      ctx.globalAlpha = waveOpacity;
      for (let x = -canvas.width / 2; x < canvas.width / 2; x++) {
        const y =
          Math.sin(x * waveFrequency) *
          (Math.sin(x / waveScale) / (x / waveScale)) *
          waveAmplitudes[i];
        if (x === -canvas.width / 2) {
          ctx.moveTo(canvas.width / 2 + x, canvas.height / 2 - y);
        } else {
          ctx.lineTo(canvas.width / 2 + x, canvas.height / 2 - y);
        }
      }
      ctx.stroke();
      waveOpacity -= 0.2;
    }
    ctx.globalAlpha = 1;
  };

  // Animate the waves using requestAnimationFrame
  const animateWaves = (
    canvas: HTMLCanvasElement,
    waveColor: string,
    waveThickness: number,
    waveScale: number,
    waveFrequency: number,
    amplitudesMax: number[],
    animationSpeed: number,
    animationAmplitude: number
  ) => {
    const waveAmplitudes = Array(amplitudesMax.length).fill(0);
    let time = 0;
    const phases = Array(amplitudesMax.length).fill(0);
    const phaseSpeeds = Array(amplitudesMax.length).fill(
      Math.random() * 0.1 + 0.1
    );
    const phaseAmplitudes = Array(amplitudesMax.length).fill(
      Math.random() * 0.3 + 0.1
    );

    const animate = () => {
      time += animationSpeed;
      for (let i = 0; i < amplitudesMax.length; i++) {
        const phaseOffset =
          Math.sin(time * phaseSpeeds[i]) * phaseAmplitudes[i];
        phases[i] = Math.sin(time) * animationAmplitude + phaseOffset;
        waveAmplitudes[i] =
          amplitudesMax[i] *
          Math.abs(Math.sin(time * phaseSpeeds[i] + phases[i])) *
          0.5;
      }

      drawWaves(
        canvas,
        waveColor,
        waveThickness,
        waveScale,
        waveFrequency,
        waveAmplitudes
      );
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    animationFrameIdRef.current = animationId;

    return () => cancelAnimationFrame(animationId);
  };

  // Call animateWaves on component mount and clean up on unmount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const cleanup = animateWaves(
      canvas,
      color,
      thickness,
      scale,
      frequency,
      amplitudesMax,
      animationSpeed,
      animationAmplitude
    );

    // Return the cleanup function
    return () => {
      cleanup();
      // Cancel the animation frame using the ID stored in the ref
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [
    color,
    thickness,
    scale,
    frequency,
    amplitudesMax,
    animationSpeed,
    animationAmplitude,
  ]);

  return <canvas ref={canvasRef} />;
};

export default SincWave;
