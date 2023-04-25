import { CardDropdown, Section } from './style';

export const DropdownHeader = ({ allSections, nameCurrentSection }: any) => {
  const getItem = (event) => {
    console.log(event.id);
  };

  return (
    <CardDropdown>
      {allSections.map((section) => (
        <li
          onClick={() => {
            getItem(section);
          }}
          key={section.id}
        >
          <Section
            id={nameCurrentSection === section.name ? `active` : ''}
            href="#"
          >
            {section.name}
          </Section>
        </li>
      ))}
    </CardDropdown>
  );
};
