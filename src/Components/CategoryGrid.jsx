import React from 'react';

import c1 from "../assets/category/IMG-20250907-WA0121.jpg";
import c2 from "../assets/category/IMG_0043.JPG";
import c3 from "../assets/category/IMG-20251014-WA0260.jpg";
import c4 from "../assets/category/IMG-20250924-WA0108.jpg";
import c5 from "../assets/category/IMG-20250921-WA0032.jpg";
import c6 from "../assets/category/IMG-20251107-WA0045.jpg";
import c7 from "../assets/category/IMG-20251009-WA0055.jpg";
import c8 from "../assets/category/PXL_20251108_065856885.jpg";

const categories = [
  { 
    id: 1, 
    name: "Valentine Day Bouquets", 
    image: c1 
  },
  { 
    id: 2, 
    name: "Anniversery", 
    image: c2 
  },
  { 
    id: 3, 
    name: "Birthday", 
    image: c3 
  },
  { 
    id: 4, 
    name: "Cakes & Choco", 
    image: c4 
  },
  { 
    id: 5, 
    name: "For Her", 
    image: c5 
  },
  { 
    id: 6, 
    name: "For Him", 
    image: c6 
  },
  { 
    id: 7, 
    name: "Valentine Gifts", 
    image: c7 
  },
  { 
    id: 8, 
    name: "Gifts", 
    image: c8 
  },
];

const CategoryGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 lg:gap-8">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center group cursor-pointer">
            <div className="w-full aspect-square overflow-hidden rounded-[10px] lg:rounded-[20px] shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-center text-[13px] sm:text-xs md:text-sm font-semibold text-gray-800 leading-[1.2]">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
