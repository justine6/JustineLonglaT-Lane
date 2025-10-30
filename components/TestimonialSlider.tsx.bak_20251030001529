'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
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
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
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
            <div className="p-6 bg-white rounded-xl shadow text-center border">
              <p className="text-lg italic text-gray-700 mb-4">“{testimonial.quote}”</p>
              <h4 className="text-base font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
