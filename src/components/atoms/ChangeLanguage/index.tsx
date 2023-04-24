import { useEffect, useState } from 'react';
import Select from 'react-select';
import { CardSelect, ContainerSelect } from './style';
import { COLORS } from '@/common';

const countries = [{ value: 'pt-BR' }, { value: 'en-US' }];

export const ChangeLanguage = () => {
  const I18N_STORAGE_KEY = 'i18nextLng';
  const [selectedCountry, setSelectedCountry] = useState<any>(countries[0]);
  const instanceId = 'select-box';

  useEffect(() => {
    const data: any = localStorage.getItem('index');
    const obj = JSON.parse(data);
    setSelectedCountry(countries[obj]);
  }, []);

  const handleChange = (value: any) => {
    const index = value.value === 'pt-BR' ? 0 : 1;
    setSelectedCountry(index);
    localStorage.setItem('index', index.toString());
    localStorage.setItem(I18N_STORAGE_KEY, value.value);
    location.reload();
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected && `${COLORS.brand._03}`,
      color: state.isSelected && `${COLORS.light._06}`,
    }),
  };
  return (
    <ContainerSelect>
      <Select
        styles={customStyles}
        instanceId={instanceId}
        value={selectedCountry}
        options={countries}
        onChange={handleChange}
        backspaceRemovesValue
        formatOptionLabel={(country) => (
          <CardSelect>
            <span>{country.value}</span>
          </CardSelect>
        )}
      />
    </ContainerSelect>
  );
};
