import { ContainerModule } from './styled';

export const CardModule = ({ module }) => {
  return (
    <ContainerModule>
      <h3>{module.title}</h3>
      <p>{module.content}</p>
      <button>{module.button}</button>
    </ContainerModule>
  );
};
