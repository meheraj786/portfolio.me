"use client";
import React, { useEffect, useRef } from "react";

const MouseFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let targetX = window.innerWidth / 2;  // শুরুতে মাঝখানে রাখা
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      const easing = 0.16;

      currentX += (targetX - currentX) * easing;
      currentY += (targetY - currentY) * easing;

      cursor.style.transform = `translate(${currentX - 20}px, ${currentY - 20}px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    animate(); 

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`
        fixed top-0 left-0 
        w-10 h-10 
        rounded-full 
        border-2 border-background 
        pointer-events-none 
        z-[9999]
        will-change-transform
        bg-transparent
      `}
    />
  );
};

export default MouseFollower;