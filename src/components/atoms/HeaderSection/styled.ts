import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerHeaderSection = styled.div<{
  lineHeight?: string;
}>`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${COLORS.dark._04};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : '4rem')};
    span,
    a {
      color: ${COLORS.brand._02};
      font-size: 2rem;
    }
  }
  h6 {
    color: ${COLORS.gray._02};
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  @media (max-width: ${BREAKPOINTS.sm}) {
    h6 {
      font-size: 0.875rem;
    }
    h1,
    span,
    a {
      font-size: 1.5rem !important;
      margin-bottom: 0;
      line-height: ${(props) => (props.lineHeight ? props.lineHeight : '48px')};
    }
  }
`;
