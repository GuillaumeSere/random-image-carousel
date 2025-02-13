import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarouselFade: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageUrls: string[] = [];
      for (let i = 0; i < 10; i++) {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=1B13o5S3g0GI5asvqdYiznyahC3GOnzrcxm760zy`);
        const data = await response.json();
        imageUrls.push(data.url);
      }
      setImages(imageUrls);
    };

    fetchImages();
  }, []);


  return (
    < >
        <div className="box-image">
          <img className="img1" src={images[0]} style={{ width: '300px', height: 'auto' }} />
          <img className="img2" src={images[0]} style={{ width: '300px', height: 'auto' }} />
        </div>
    </>
  );
};

export default ImageCarouselFade;

