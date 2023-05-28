import { VideosCardMock } from '@/__mocks__';
import {
  ResultsVideos,
  VideosContainer,
  StudentInfos,
  CardImage,
} from './style';
import Image from 'next/image';
import { useState } from 'react';
import { ICONS } from '@/assets';

export const CardVideos = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const handlePlay = (id: string) => {
    setCurrentVideo(id);
  };

  const handleVideoPause = () => {
    setCurrentVideo(null);
  };

  return (
    <ResultsVideos>
      {VideosCardMock.map((item) => (
        <VideosContainer key={item.id}>
          {currentVideo === item.id ? (
            <video
              src={item.src}
              controls
              autoPlay
              onPause={handleVideoPause}
            ></video>
          ) : (
            <CardImage>
              <Image height={450} src={item.img} alt="imagem estudante" />
              <button onClick={() => handlePlay(item.id)}>
                <Image src={ICONS.ButtonPlay} alt="button play" />
              </button>
            </CardImage>
          )}
          <StudentInfos>
            <h2>{item.student}</h2>
            <p>{item.time} meses</p>
          </StudentInfos>
        </VideosContainer>
      ))}
    </ResultsVideos>
  );
};
