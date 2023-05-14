import { DoubtsContent, DoubtsText } from './style';

interface DoubtProps {
  title: string;
  subTitle: string;
  id: string;
}

export const DoubtsCard = ({ title, subTitle, id }: DoubtProps) => {
  return (
    <DoubtsContent>
      <DoubtsText>
        <h1>{id}</h1>
        <div>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
      </DoubtsText>
    </DoubtsContent>
  );
};
