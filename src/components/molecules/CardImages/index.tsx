import { VideosCardMock } from '@/__mocks__';
import Image from 'next/image';

export const CardVideos = () => {
  return (
    <div>
      {VideosCardMock.map((item) => (
        <div>
          <Image src={item.img}></Image>
        </div>
      ))}
    </div>
  );
};
