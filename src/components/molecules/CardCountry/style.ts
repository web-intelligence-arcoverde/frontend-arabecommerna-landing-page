import { BREAKPOINTS } from './../../../common/index';
import { COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerCountry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    align-items: flex-start;
    padding: 0px 20px 32px;
    gap: 12px;
  }
`;

export const InfoCountry = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: solid 1px ${COLORS.gray._01};
  padding-bottom: 16px;
  h4 {
    font-weight: 600;
    color: ${COLORS.light._05};
    font-size: 1.25rem;
    margin-bottom: 4px;
  }
  span {
    margin-top: 4px;
    font-weight: 400;
    color: ${COLORS.light._05};
  }
  @media (max-width: ${BREAKPOINTS.sm}) {
    width: 100%;
    h4 {
      font-weight: 500;
      font-size: 1rem;
      line-height: 24px;
    }
    span {
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 21px;
    }
  }
`;

export const IconCountry = styled.div`
  background: rgba(240, 240, 240, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const DescriptionCountry = styled.p`
  color: ${COLORS.light._04};
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 36px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-weight: 400;
    font-size: 1rem;
    line-height: 32px;
  }
`;
