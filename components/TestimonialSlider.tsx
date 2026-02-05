'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { LINKS } from '@/config/links';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/pagination';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Alain R',
    role: 'CTO, Haiti 2075 project',
    quote: 'Justine transformed our AWS infrastructure with security and automation. Highly recommended!',
  },
  {
    name: 'Mba Gabriel',
    role: 'CEO, Masanga group',
    quote: 'Our deployment pipeline is now 5x faster thanks to Justine’s DevSecOps expertise.',
  },
  {
    name: 'Aliyu Ntah Yeh',
    role: 'Product Manager, masanga commodity trade project',
    quote: 'We sleep better knowing Justine’s monitoring and cost optimization are in place.',
  },
];

export default function TestimonialSlider() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h2 className="mb-8 text-center text-2xl font-semibold text-slate-900 dark:text-slate-100 sm:text-3xl">
        What Clients Are Saying
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="rounded-xl"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 text-center shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
              <p className="mb-4 text-lg italic text-slate-700 dark:text-slate-200">
                “{testimonial.quote}”
              </p>

              <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                {testimonial.name}
              </h4>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                {testimonial.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


