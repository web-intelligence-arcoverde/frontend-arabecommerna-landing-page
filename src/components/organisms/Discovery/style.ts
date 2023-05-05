import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const DiscoveryContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.light._05};
  padding: 128px 96px;
  text-align: center;
  letter-spacing: 0.02em;
  height: 100%;
<<<<<<< HEAD
  gap: 12px;

=======
  gap: 24px;
  p {
    color: ${COLORS.gray._02};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 36px;
    max-width: 1024px;
  }
>>>>>>> b9d4966 (refactor: refactor mocks. feat: add new images)
  @media (max-width: ${BREAKPOINTS.sm}) {
    padding: 96px 20px;
    gap: 34px;
    p {
      max-width: 335px;
      font-size: 1rem;
      line-height: 31px;
    }
  }
`;
export const DiscoveryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: ${BREAKPOINTS.sm}) {
    span {
      display: none !important;
    }
  }
`;
export const Title = styled.div`
  h1 {
    color: ${COLORS.gray._02};
    font-size: 1rem;
    font-weight: 500;
    line-height: 24px;
  }
  h2,
  a {
    color: ${COLORS.dark._04};
    font-size: 2rem;
    font-weight: 700;
    line-height: 48px;
  }
  a {
    pointer-events: none;
    color: ${COLORS.brand._02};
  }
  width: 700px;
  @media (max-width: ${BREAKPOINTS.sm}) {
    h1 {
      font-size: 0.975rem;
      line-height: 21px;
    }
    h2,
    a {
      font-family: 'Raleway';
      font-size: 1.7rem;
      line-height: 36px;
    }
  }
`;
