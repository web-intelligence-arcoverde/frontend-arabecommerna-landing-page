import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  CardIconFeedback,
  ContainerTestimonial,
  InfoUser,
  PerfilUser,
  Post,
} from './style';
import Image from 'next/image';
import { ICONS } from '@/assets';
import { testimonialMock } from '@/__mocks__';

SwiperCore.use([Navigation, Pagination]);

export const Testimonial = () => {
  return (
    <ContainerTestimonial>
      <CardIconFeedback>
        <Image src={ICONS.TestimonialIcon} alt="icone representativo de fala" />
      </CardIconFeedback>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {testimonialMock.map((item) => (
          <SwiperSlide key={item.name}>
            <Post>
              <p>{item.text}</p>
              <PerfilUser>
                <Image
                  height={56}
                  width={56}
                  src={item.perfil}
                  alt="icone representativo de fala"
                />
                <InfoUser>
                  <h5>{item.name}</h5>
                  <h6>{item?.occupation}</h6>
                </InfoUser>
              </PerfilUser>
            </Post>
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerTestimonial>
  );
};
