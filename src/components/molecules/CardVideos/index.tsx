import { VideosCardMock } from '@/__mocks__';
import { ResultsVideos, VideosContainer, StudentInfos } from './style';
import Image from 'next/image';
import { useRef, useState } from 'react';

export const CardVideos = () => {
  const [videoStarted, setVideoStarted] = useState<boolean[]>(
    VideosCardMock.map(() => false)
  );
  const videoRef = useRef<any>(VideosCardMock.map(() => null));
  const handlePlay = (index: any) => {
    const newVideos = [...videoStarted];
    newVideos[index] = true;
    setVideoStarted(newVideos);

    if (videoRef.current[index]) {
      console.log('ALGUMA COISA' + videoRef.current);
      videoRef.current[index].play();
    }
    console.log('clique');
  };
  return (
    <ResultsVideos>
      {VideosCardMock.map((item, index) => (
        <VideosContainer key={item.id}>
          {!videoStarted ? (
            <div>
              <Image src={item.img} />
              <button onClick={handlePlay}>teste</button>
            </div>
          ) : (
            <div>
              <button onClick={handlePlay}>teste</button>
              <video
                ref={(e) => {
                  videoRef.current[index] = e;
                }}
                src={item.src}
                controls
              ></video>
            </div>
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
