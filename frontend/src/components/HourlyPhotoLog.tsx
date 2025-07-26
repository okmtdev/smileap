"use client";

import Image from 'next/image';
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photoData = [
  { time: '00:00', url: '/sample-photo-3.jpg' },
  { time: '01:00', url: '/sample-photo-4.jpg' },
  { time: '02:00', url: '/sample-photo-5.jpg' },
  { time: '03:00', url: '/sample-photo-6.jpg' },
  { time: '04:00', url: '/sample-photo-3.jpg' },
  { time: '05:00', url: '/sample-photo-4.jpg' },
  { time: '06:00', url: '/sample-photo-5.jpg' },
  { time: '07:00', url: '/sample-photo-6.jpg' },
  { time: '08:00', url: '/sample-photo-3.jpg' },
  { time: '09:00', url: '/sample-photo-4.jpg' },
];

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: "block", right: "-25px" }}
      onClick={onClick}
    >
      <ChevronRight size={32} />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-arrow`}
      style={{ ...style, display: "block", left: "-25px" }}
      onClick={onClick}
    >
      <ChevronLeft size={32} />
    </div>
  );
}


const HourlyPhotoLog = () => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "40px",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-2">
        <Camera size={24} />
        <span>定点観測</span>
      </h2>
      <div className="px-4 relative">
        <Slider {...settings}>
          {photoData.map((photo) => (
            <div key={photo.time} className="px-2">
              <div className="relative group border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <Image
                  src={`https://smileap-cemera-feed.s3.ap-northeast-1.amazonaws.com/images/sample.png`}
                  alt={`定点写真 ${photo.time}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1">
                  <p className="text-sm font-semibold">{photo.time}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HourlyPhotoLog;
