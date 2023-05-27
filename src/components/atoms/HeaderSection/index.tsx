import { ContainerHeaderSection } from './styled';

interface HeaderSectionProps {
  smallText: string;
  bigText: string;
  lineHeight?: string;
}

export const HeaderSection = ({
  smallText,
  bigText,
  lineHeight,
}: HeaderSectionProps) => {
  const title = bigText;
  return (
    <ContainerHeaderSection lineHeight={lineHeight}>
      <h6>{smallText}</h6>
      <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
    </ContainerHeaderSection>
  );
};
