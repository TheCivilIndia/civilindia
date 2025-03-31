import React from 'react';
import './brand.css'; // Assuming you will add necessary styles here
import FlipCard from './cards/ResultFlipCard';

const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Steve Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Ariana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
];

const BrandSlider = () => {
  // Duplicate the items to achieve an infinite effect
  const sliderItems = [...TestimonialsData, ...TestimonialsData];

  return (
    <div className="brand-slider">
      <div className="slider-track">
        {sliderItems.map((item, index) => (
          <FlipCard
            key={index} // Use index as key since items are duplicated
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
