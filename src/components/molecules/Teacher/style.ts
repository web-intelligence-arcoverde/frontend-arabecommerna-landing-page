import { BREAKPOINTS } from '../../../common/index';
import { COLORS } from '@/common';
import styled from 'styled-components';

export const TeacherPresentation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 128px 96px;
  position: relative;
  gap: 96px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    flex-direction: column;
    padding: 0;
    gap: 0;
  }
  img{
    height: 100% !important;
    width: 100% !important;
    max-width: 322px;
  }
`;
export const CardImage = styled.div`

  @media (max-width: ${BREAKPOINTS.sm}) {
    span {
      max-width: 375px;
      max-height: 350px;
    }
  }
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  h1 {
    font-weight: 500;
    line-height: 24px;
    color: ${COLORS.gray._02};
  }
  h2 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 48px;
    color: ${COLORS.dark._04};
  }
  p {
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 36px;
    color: ${COLORS.gray._02};
    max-width: 612px;
  }
  span {
    color: ${COLORS.brand._02};
    font-weight: 700;
    font-size: 2rem;
    line-height: 48px;
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 56px 20px 96px;
    h1 {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 21px;

    }
    h2 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 36px;
    }
    p {
      padding: 0px 6px;
      font-weight: 400;
      font-size: 1rem;
      line-height: 32px;
    }
  }
`;

export const CardIcon = styled.div`
  position: absolute;
  right: 96px;
  top: 96px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;
