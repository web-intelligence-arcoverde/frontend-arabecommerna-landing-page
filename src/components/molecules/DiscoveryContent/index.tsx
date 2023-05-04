import { DiscoveryImages } from './style';
import Image from 'next/image';
type DiscoveryProps = {
  textContent: string;
  images: any;
};
export const DiscoveryCard = ({ textContent, images }: DiscoveryProps) => {
  return (
    <>
      <p>{textContent}</p>
      <DiscoveryImages>
        {images.map((imgPresentation, index) => (
          <Image key={index} src={imgPresentation} />
        ))}
      </DiscoveryImages>
    </>
  );
};
