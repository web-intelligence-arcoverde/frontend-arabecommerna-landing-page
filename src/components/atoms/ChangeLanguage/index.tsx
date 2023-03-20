import { useEffect, useState } from "react";
import Select from "react-select";
import { CardSelect, ContainerSelect } from "./style";

const countries = [
  { value: "pt-BR", label: "Português" },
  { value: "en-US", label: "English" },
];

export const ChangeLanguage = () => {
  const I18N_STORAGE_KEY = "i18nextLng";
  const [selectedCountry, setSelectedCountry] = useState<any>(countries[0]);
  const instanceId = "select-box";

  useEffect(() => {
    const data: any = localStorage.getItem("index");
    const obj = JSON.parse(data);
    setSelectedCountry(countries[obj]);
  }, []);

  const handleChange = (value: any) => {
    const index = value.value === "pt-BR" ? 0 : 1;
    setSelectedCountry(index);
    localStorage.setItem("index", index.toString());
    localStorage.setItem(I18N_STORAGE_KEY, value.value);
    location.reload();
  };
  return (
    <ContainerSelect>
      <Select
        instanceId={instanceId}
        value={selectedCountry}
        options={countries}
        onChange={handleChange}
        backspaceRemovesValue
        formatOptionLabel={(country) => (
          <CardSelect>
            <span>{country.label}</span>
          </CardSelect>
        )}
      />
    </ContainerSelect>
  );
};
