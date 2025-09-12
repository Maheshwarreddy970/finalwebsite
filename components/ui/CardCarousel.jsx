'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SparklesIcon } from 'lucide-react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import { Badge } from '@/components/ui/badge';

export const CardCarousel = ({
  images,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
    }

    .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }

    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }
  `;

  return (
    <section className="w-ace-y-4 ">
      <style>{css}</style>
      <div className="mx-auto w-full ">
        <div className="relative mx-auto flex w-full flex-col  ">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full h-[400px]">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect="coverflow"
                grabCursor
                centeredSlides
                loop
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide className=' ' key={`first-${index}`}>
                    <div className="size-full rounded-3xl">
                      <Image
                        src={image.src}
                        width={500}
                        height={500}
                        className="size-full rounded-xl"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
                {images.map((image, index) => (
                  <SwiperSlide key={`second-${index}`}>
                    <div className="size-full rounded-3xl">
                      <Image
                        src={image.src}
                        width={200}
                        height={200}
                        className="size-full rounded-xl"
                        alt={image.alt}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
