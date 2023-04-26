import { ICONS } from '@/assets';
import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerTestimonial = styled.div`
  display: flex;
  padding: 32px;
  border: solid 1px ${COLORS.light._02};
  border-radius: 5px;
  max-width: 824px;
  height: max-content;
  .swiper-button-prev,
  .swiper-button-next {
    top: 85%;
    content: url(${ICONS.ArrowBlue.src});
    border-radius: 5px;
    width: 40px;
    height: 40px;
    border: solid 1px ${COLORS.light._03};
  }
  .swiper-button-prev {
    left: 85%;
    transform: rotate(180deg);
  }
  .swiper-button-next {
    right: 0;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    gap: 24px;
    .swiper {
      width: 100%;
    }
    .swiper-button-prev {
      display: none;
    }
    .swiper-button-prev,
    .swiper-button-next {
      top: 92%;
    }
  }
`;

export const CardIconFeedback = styled.div`
  border-radius: 5px;
  margin-right: 32px;
  width: 30%;
  @media (max-width: ${BREAKPOINTS.sm}) {
    img {
      width: 48px !important;
    }
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  p {
    font-size: 1.1rem;
    color: ${COLORS.gray._03};
    border-bottom: solid 1px ${COLORS.light._02};
    padding-bottom: 32px;
    margin-bottom: 32px;
    width: 90%;
  }
`;

export const PerfilUser = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  img {
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const InfoUser = styled.div`
  h5 {
    color: ${COLORS.gray._02};
    font-size: 1.05rem;
    font-weight: 500;
    margin-bottom: 4px;
  }
  h6 {
    color: ${COLORS.gray._03};
    font-weight: 400;
  }
`;
