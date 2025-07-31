import React, { useState } from 'react';
import './OurServices.css';

const services = [
  {
    title: "Web Development",
    description: "We build fast, responsive websites using modern frameworks.",
    image: "https://source.unsplash.com/100x100/?web",
  },
  {
    title: "AI/ML Solutions",
    description: "Implement AI and machine learning to boost productivity.",
    image: "https://source.unsplash.com/100x100/?ai",
  },
  {
    title: "Cloud Deployment",
    description: "Deploy scalable apps on AWS, Azure, and other cloud platforms.",
    image: "https://source.unsplash.com/100x100/?cloud",
  },
];

const OurServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="services-section">
      <h2 className="title">Our Services</h2>
      <div className="cards-wrapper">
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          const className = isActive ? "card active" : `card shifted-${(index - activeIndex + services.length) % services.length}`;
          return (
            <div
              key={index}
              className={className}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;