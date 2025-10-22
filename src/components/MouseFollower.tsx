"use client";
import React, { useEffect, useState } from "react";

const MouseFollower: React.FC = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const frame = () => {
      setPos(prev => ({
        x: prev.x + (target.x - prev.x) * 0.15,
        y: prev.y + (target.y - prev.y) * 0.15,
      }));
      requestAnimationFrame(frame);
    };

    frame(); 

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [target]);

  return (
    <div
      className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-black pointer-events-none z-[9999]"
      style={{
        transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
        backgroundColor: "transparent",
      }}
    ></div>
  );
};

export default MouseFollower;
