import { BREAKPOINTS, COLORS } from '@/common';
import Image from 'next/image';
import styled from 'styled-components';

export const ContainerFeedback = styled.section`
  padding: 128px 96px;
  display: flex;
  gap: 120px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
  }
  aside {
    h4 {
      color: ${COLORS.gray._02};
      font-weight: 500;
      margin-bottom: 12px;
    }
    h1 {
      color: ${COLORS.dark._04};
      font-size: 2rem;
      max-width: 306px;
      margin-bottom: 92px;
    }
    span {
      color: ${COLORS.brand._02};
      font-size: 2rem;
    }
  }
`;
export const CardImage = styled.div`
  display: flex;

  span {
    padding-left: 50px;
    position: relative;
    left: 50%;
  }
`;
