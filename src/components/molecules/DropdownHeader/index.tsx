import { allSectionsMock } from '@/__mocks__';
import { CardDropdown } from './style';

export const DropdownHeader = () => {
  const getItem = (event) => {
    console.log(event.id);
  };

  return (
    <CardDropdown>
      {allSectionsMock.map((section) => (
        <li
          onClick={() => {
            getItem(section);
          }}
          key={section.id}
        >
          <a href="#">{section.name}</a>
        </li>
      ))}
    </CardDropdown>
  );
};
