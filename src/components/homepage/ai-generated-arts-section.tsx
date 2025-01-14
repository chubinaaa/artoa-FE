"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { buttonVariants } from "../ui/button";

// import { Button } from "@/components/ui/button";
// import { Icons } from "../icons";

const cards = [
  { id: 1, title: "Card 1", content: "Content for Card 1" },
  { id: 2, title: "Card 2", content: "Content for Card 2" },
  { id: 3, title: "Card 3", content: "Content for Card 3" },
  { id: 4, title: "Card 4", content: "Content for Card 4" },
  { id: 5, title: "Card 5", content: "Content for Card 5" },
];

const cardVariants = {
  center: { scale: 1, zIndex: 5, y: "-50%", x: "-50%" },
  left1: { scale: 0.62, zIndex: 4, y: "-50%", x: "-120%" },
  left2: { scale: 0.49, zIndex: 3, y: "-50%", x: "-150%" },
  right1: { scale: 0.62, zIndex: 4, y: "-50%", x: "20%" },
  right2: { scale: 0.49, zIndex: 3, y: "-50%", x: "50%" },
};

export function AiGeneratedArtsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleSwipeStart = (event: React.MouseEvent | React.TouchEvent) => {
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    startX.current = clientX;
    isDragging.current = true;
    setIsGrabbing(true);
    event.preventDefault();
  };

  const handleSwipeMove = (event: React.MouseEvent) => {
    if (isDragging.current) {
      event.preventDefault();
    }
  };

  const handleSwipeEnd = (event: React.MouseEvent | React.TouchEvent) => {
    const clientX =
      "touches" in event ? event.changedTouches[0].clientX : event.clientX;
    const diff = clientX - startX.current;

    if (isDragging.current) {
      if (diff > 50)
        handlePrev(); // Swipe right
      else if (diff < -50) handleNext(); // Swipe left
    }
    isDragging.current = false;
    setIsGrabbing(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length,
    );
  };

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isHovered) {
          handleNext();
        }
      }, 3000);
    };
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // const interval = setInterval(() => {
    //   handleNext();
    // }, 3000);
    // return () => clearInterval(interval);
  }, [isHovered]);

  const handleHovered = () => {
    setIsHovered(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleUnhovered = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div
        className="relative min-h-[400px] w-full rounded-lg md:min-h-[900px]"
        onMouseDown={handleSwipeStart}
        onMouseMove={handleSwipeMove}
        onMouseUp={handleSwipeEnd}
        onTouchStart={handleSwipeStart}
        onTouchEnd={handleSwipeEnd}
        onMouseEnter={handleHovered}
        onMouseLeave={handleUnhovered}
      >
        <p className="mt-28 flex justify-center text-4xl font-bold md:text-6xl">
          ArtOa AI-Generated Arts
        </p>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {cards.map((card, index) => {
            const position = ["left2", "left1", "center", "right1", "right2"][
              (index - currentIndex + cards.length + 2) % cards.length
            ];
            return (
              <motion.div
                key={card.id}
                className={`absolute left-1/2 top-1/2 aspect-[9/12] w-[134px] rounded-lg p-6 shadow-lg sm:w-[246px] md:w-[295px] lg:w-[400px] 2xl:w-[550px] ${
                  isGrabbing ? "cursor-grabbing" : "cursor-grab"
                  // "cursor-pointer"
                } mt-5`}
                initial={false}
                animate={position}
                variants={cardVariants}
                transition={{ duration: 0.35 }}
                style={{
                  backgroundColor: ["green", "red", "blue", "yellow", "pink"][
                    index
                  ],
                }}
                onClick={() => {
                  setCurrentIndex(index);
                }}
              >
                <h2 className="mb-4 text-2xl font-bold">{card.title}</h2>
                <p>{card.content}</p>
              </motion.div>
            );
          })}
        </div>
        {/* <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2"
          onClick={handlePrev}
          aria-label="Previous card"
        >
          <Icons.arrowLeft />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2"
          onClick={handleNext}
          aria-label="Next card"
        >
          <Icons.arrowRight />
        </Button> */}
      </div>
      <div className="mb-28 flex justify-center">
        <Link
          href="#"
          className={cn(buttonVariants(), "h-10 leading-5 md:h-12")}
        >
          Try ArtOa AI
        </Link>
      </div>
    </div>
  );
}
