import { allSectionsMock } from '@/__mocks__';
import { CardDropdown } from './style';

export const DropdownHeader = () => {
  return (
    <CardDropdown>
      {allSectionsMock.map((section) => (
        <li key={section.id}>
          <a href='#'>{section.name}</a>
        </li>
      ))}
    </CardDropdown>
  );
};
