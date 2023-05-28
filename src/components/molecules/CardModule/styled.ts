import { BREAKPOINTS, COLORS } from '@/common';
import styled from 'styled-components';

export const ContainerModule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: solid 1px ${COLORS.light._02};
  padding: 32px;
  min-height: 400px;
  min-width: 312px;
  position: relative;
  :last-child{
    margin-right: 100px;
  }
  
`;

export const CardIcon = styled.div`
  border-radius: 5px;
  border: solid 1px ${COLORS.light._02};
  padding: 8px 12px;
`;

export const DescriptionModule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h3 {
    font-weight: 500;
    color: ${COLORS.gray._02};
    font-size: 1.125rem;
  }
  p {
    color: ${COLORS.gray._02};
    line-height: 28px;
  }
  button {
    width: max-content;
    border: none;
    background-color: transparent;
    color: ${COLORS.auxiliary.blue};
    text-transform: lowercase;
  }
`;

export const ContentModule = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: ${COLORS.light._06};

`
export const HeaderCard = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  width: 100%;
  background-color: ${COLORS.light._05};
  border-bottom: solid 1px ${COLORS.light._02};
  h4{
    color: ${COLORS.gray._02};
    font-weight: 600;
  }
  img{
    cursor: pointer;
  }

`

export const ListCurrentModule = styled.ul`
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.5em;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
 
  li {
    padding: 20px;
    border-bottom: solid 1px ${COLORS.light._04};
    color: ${COLORS.gray._04};
    font-weight: 500;
   :last-child{
    margin-bottom: 10px;
   }
  }

`