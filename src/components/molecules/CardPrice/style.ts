import { COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 56px;
  border-radius: 5px;
  background-color: ${COLORS.light._06};
  width: 100%;
  max-width: 500px;
  justify-content: space-between;
`;

export const NextClasses = styled.h5`
  color: ${COLORS.auxiliary.confirm};
  font-weight: 400;
  width: 100%;
  font-size: 0.85rem;
  font-weight: 500;
  background-color: ${COLORS.opacity.blue_02};
  padding: 6px 12px;
  width: max-content;
  border-radius: 5px;
`;

export const OldValue = styled.h6`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${COLORS.gray._02};
  margin: 16px 0 8px 0;
  span {
    font-size: 0.8rem;
    font-weight: 400;
    color: ${COLORS.auxiliary.pink};
    font-weight: 600;
    text-decoration: line-through;
  }
`;

export const CurrentValue = styled.h1`
  font-size: 2.5rem;
  color: ${COLORS.dark._04};
  font-weight: 500;
  margin-bottom: 24px;
  span {
    font-size: 1rem;
    color: ${COLORS.gray._02};
  }
`;

export const CardBenefit = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  color: ${COLORS.gray._02};
`;

export const CardButton = styled.div`
  border-top: solid 1px ${COLORS.light._02};
  padding-top: 48px;
`;
