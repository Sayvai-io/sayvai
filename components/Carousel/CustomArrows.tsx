// components/CustomArrows.tsx
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

export const CustomPrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
  <div
    className={`absolute top-1/2 left-0.5 transform -translate-y-1/2 p-2 cursor-pointer z-10 `}
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

export const CustomNextArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
  <div
    className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer z-10 `}
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);
