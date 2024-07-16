import React, { useState } from "react";
import "./style.css"; // Import your CSS file

const SlideItem = ({ imageUrl }: any) => {
  return (
    <div className="item" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="content">
        <div className="name">Slide</div>
        <div className="des">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!
        </div>
        <button>See More</button>
      </div>
    </div>
  );
};

const BlogPostList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://i.ibb.co/qCkd9jS/img1.jpg",
    "https://i.ibb.co/jrRb11q/img2.jpg",
    "https://i.ibb.co/NSwVv8D/img3.jpg",
    "https://i.ibb.co/Bq4Q0M8/img4.jpg",
    "https://i.ibb.co/jTQfmTq/img5.jpg",
    "https://i.ibb.co/RNkk6L0/img6.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container">
      <div className="slide">
        {images.map((imageUrl, index) => (
          <SlideItem key={currentIndex} imageUrl={imageUrl} />
        ))}
      </div>
      <div className="button">
        <button className="prev" onClick={prevSlide}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={nextSlide}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default BlogPostList;
