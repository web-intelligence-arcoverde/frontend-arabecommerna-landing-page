import Image from 'next/image';
import { DiscoveryContent, DiscoveryImages, DiscoveryTitle } from './style';
import { ICONS } from '@/assets';
import { GroupButtons } from '@/components/atoms/ButtonsGroup';
import { discoveryCultureMock } from '@/__mocks__';

export const Discovery = () => {
  return (
    <DiscoveryContent>
      <DiscoveryTitle>
        <Image src={ICONS.Grade} />
        <h1>DESCUBRA</h1>
        <Image src={ICONS.Details} />
      </DiscoveryTitle>
      <h2>
        Porque aprender a <span>língua Árabe</span>
      </h2>
      <GroupButtons />
      <p>
        A cultura árabe é extremamente rica e diversa, abrangendo mais de 20
        países e uma população de mais de 400 milhões de pessoas. Essa riqueza
        cultural é expressa em áreas como a literatura, arquitetura, música,
        dança e gastronomia. A influência da cultura árabe pode ser vista em
        várias partes do mundo, o que evidencia sua importância e valorização
      </p>
      <DiscoveryImages>
        {discoveryCultureMock.map((imgPresentation, index) => (
          <Image key={index} src={imgPresentation} />
        ))}
      </DiscoveryImages>
    </DiscoveryContent>
  );
};
