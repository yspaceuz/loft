import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { arrow } from "./utils/icons";

function Carousel() {
  const data = [
    {
      imageURL: "/images/carousel/carousel 1.webp",
    },
    {
      imageURL: "/images/carousel/carousel 1.webp",
    },
    {
      imageURL: "/images/carousel/carousel 1.webp",
    },
  ];
  return (
    <>
      <div className="relative sm:hidden">
        <Image src={data[0].imageURL} width={1140} height={450} alt="product" />
        <div className="absolute inset-y-0 flex items-center pl-4 pr-1 bg-white/70 max-w-[50%]">
          <div className="space-y-2">
            <p className="leading-[1.2] font-medium">
              Современная и удобная мебель в Анапе
            </p>
            <p className="text-[10px] leading-[1.2]">
              С доставкой по <br /> Краснодарскому краю
            </p>
          </div>
        </div>
      </div>
      <div className="hidden sm:block select-none">
        <Swiper
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          {data.map((slider, i) => (
            <SwiperSlide key={i}>
              <div className="relative">
                <Image
                  src={slider.imageURL}
                  width={1140}
                  height={450}
                  alt="product"
                />
                <div className="absolute inset-y-0 flex items-center pl-6 pr-2 sm:px-0 bg-white/70 sm:bg-transparent">
                  <div className="sm:ml-11 md:ml-32 space-y-2 sm:space-y-5">
                    <p className="slider-title font-bold hidden md:block uppercase text-[50px] text-[#3C3C3C] leading-[1.05]">
                      loft
                      <br />
                      мебель
                    </p>
                    <p className="leading-[1.2] font-medium sm:font-normal sm:text-2xl md:text-base max-w-[200px] md:max-w-none">
                      Современная и удобная мебель в Анапе
                    </p>
                    <p className="sm:hidden text-[10px] leading-[1.2]">
                      С доставкой по <br /> Краснодарскому краю
                    </p>
                    <button className="hidden cursor-pointer sm:inline-block w-[130px] h-[40px] md:w-[163px] md:h-[45px] text-xs bg-white">
                      СМОТРЕТЬ КАТАЛОГ
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="prev hidden z-10 absolute bottom-8 right-16 md:top-1/2 md:left-6 cursor-pointer bg-white w-[30px] h-[30px] sm:flex items-center justify-center text-gray-500">
            {arrow}
          </div>
          <div className="next hidden z-10 absolute bottom-8 right-8 md:top-1/2 md:right-6 cursor-pointer bg-white w-[30px] h-[30px] sm:flex items-center justify-center text-gray-500 rotate-180">
            {arrow}
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
