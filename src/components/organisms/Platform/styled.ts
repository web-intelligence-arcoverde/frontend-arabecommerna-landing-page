import { ICONS } from '@/assets';
import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerPlatform = styled.section`
  display: flex;
  padding: 128px 96px;
  gap: 96px;
  border: solid 1px ${COLORS.light._02};
  h6 {
    color: ${COLORS.gray._02};
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  h1 {
    font-size: 2rem;
    color: ${COLORS.dark._04};
    font-family: 'Raleway';
    span {
      color: ${COLORS.brand._02};
      font-size: 2rem;
      font-family: 'Raleway';
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 96px 20px;
    gap: 20px;
    width: 100%;

    .swiper-button-prev,
    .swiper-button-next {
      top: 31%;
      content: url(${ICONS.ArrowBlue.src});
      border-radius: 5px;
      width: 20px;
      height: 20px;
      border: solid 1px ${COLORS.light._03};
    }

    .swiper-button-prev {
      transform: rotate(180deg);
      left: 2%;
    }
    .swiper-button-next {
      right: 2%;
    }
    .swiper-slide-active {
      width: 100% !important;
    }
  }
`;

export const Aside = styled.aside`
  max-width: 328px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 12px;
`;

export const ItemList = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    height: 48px;
    align-items: center;
    padding-left: 12px;
    gap: 8px;
    cursor: pointer;
    width: 100%;
    color: ${(props) =>
      props.active ? `${COLORS.auxiliary.confirm}` : `${COLORS.gray._04}`};
    background-color: ${(props) => props.active && 'rgba(10, 103, 209, 0.05);'};
    font-weight: ${(props) => (props.active ? 600 : 400)};
    border-radius: ${(props) => (props.active ? '5px' : '')};
  }
  p {
    padding: 20px 9%;
    color: ${COLORS.gray._04};
    border-bottom: solid 1px ${COLORS.light._02};
  }
`;

export const ItemListMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  li {
    color: ${COLORS.auxiliary.confirm};
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    background-color: rgba(10, 103, 209, 0.05);
    height: 48px;
  }
  p{
    padding: 20px 0 10px 0;
    color: ${COLORS.gray._04};
  }
`;
