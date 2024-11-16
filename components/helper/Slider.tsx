"use client";
import React, { useEffect, useRef, useState } from 'react';

const images = [
  '/images/hhero1.png',
  '/images/hhero2.png',
  '/images/hhero3.png',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'transform 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="overflow-hidden relative w-full h-full">
      <div ref={slideRef} className="flex">
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index}`}  width={400} height={400} className="rounded-lg" draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
