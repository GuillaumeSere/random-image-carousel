// src/components/ImageCarousel.tsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosRefresh } from "react-icons/io";

const ImageCarousel: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls: string[] = [];
      for (let i = 0; i < 10; i++) {
        imageUrls.push(`https://picsum.photos/800/600?random=${i}`);
      }
      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div className="box" key={index}>
            <img src={url} alt={`Slide ${index}`} style={{ width: '500px', height: 'auto' }} />
          </div>
        ))}
      </Slider>
      <button className="btn" onClick={handleRefresh}>
      <IoIosRefresh className='icon' />
      </button>
    </>
  );
};

export default ImageCarousel;
