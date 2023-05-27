import { VideosCardMock } from '@/__mocks__';
import { ResultsVideos, VideosContainer, StudentInfos } from './style';
import Image from 'next/image';
import { useState } from 'react';

export const CardVideos = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  return (
    <ResultsVideos>
      {VideosCardMock.map((item) => (
        <VideosContainer key={item.id}>
          {videoStarted ? (
            <Image src={item.img} />
          ) : (
            <video src={item.src} controls></video>
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
