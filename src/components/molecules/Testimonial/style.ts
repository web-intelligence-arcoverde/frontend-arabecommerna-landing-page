import { COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerTestimonial = styled.div`
  display: flex;
  padding: 32px;
  border: solid 1px ${COLORS.light._02};
  border-radius: 5px;
  max-width: 824px;
  height: max-content;
`;

export const CardIconFeedback = styled.div`
  border-radius: 5px;
  margin-right: 32px;
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
  }
`;

export const PerfilUser = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
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
