"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Supporting_arr } from "../../constants/data";
import Slider from "react-slick";
const Supporting = (): JSX.Element => {
  const [showAll, setShowAll] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const toggleShowAll = (index: any) => {
    setItemIndex(index);
    setShowAll(!showAll);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        backgroundImage: `url(${"https://ik.imagekit.io/WKS/Group%201488.png?updatedAt=1696241991703"})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[400px] mt-14"
    >
      <div className="w-full ">
        <Slider {...settings}>
          {Supporting_arr?.map((item, index) => (
            <div className="w-[25%]  border-r border-[#d9d9d97e] h-[400px] cursor-pointer  pb-6 px-3 hover:bg-[#00000054] transition-all">
              <div className=" h-full flex items-end">
                <div>
                  <p className="text-white text-[28px] font-normal">
                    {showAll
                      ? index === itemIndex
                        ? item?.heading
                        : item?.heading.slice(0, 18)
                      : item?.heading.slice(0, 18)}
                  </p>
                  <p className="text-[16px] font-normal text-white pt-2">
                    {/* {item?.subHeading} */}
                    {showAll
                      ? index === itemIndex
                        ? item?.subHeading
                        : item?.subHeading.slice(0, 65)
                      : item?.subHeading.slice(0, 65)}
                    {/* Display 50 words or all words */}
                    {!showAll && item?.subHeading.length > 65 ? (
                      <button
                        onClick={() => toggleShowAll(index)}
                        className="text-[#76C357] pl-1 text-3xl"
                      >
                        ...
                      </button>
                    ) : (
                      <button
                        onClick={() => setShowAll(false)}
                        className="text-[#76C357] pl-1 text-3xl"
                      >
                        ...
                      </button>
                    )}
                  </p>
                  <p className="text-[16px] font-normal text-white pt-4 flex items-center">
                    Discover
                    <img
                      src="https://ik.imagekit.io/WKS/Line%202.png?updatedAt=1696255894415"
                      width={20}
                      height={1}
                      alt=""
                      className="ml-2"
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Supporting;
