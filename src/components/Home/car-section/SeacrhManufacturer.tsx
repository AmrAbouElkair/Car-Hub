"use client";

import { SearchManuFacturerProps } from "@/types";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { manufacturers } from "@/constants";

const SeacrhManufacturer = ({ setManuFacturer }: SearchManuFacturerProps) => {
  return (
    <div className="bg-green-400">
      <Autocomplete
        isClearable
        defaultItems={manufacturers}
        placeholder="Choose A Car"
        startContent={
          <i className="fa-solid fa-gauge fa-lg mr-2 text-slate-400"></i>
        }
        size="lg"
        allowsCustomValue={true}
        // value={manufacturer}
        onInputChange={(value) => {
          console.log(value);
          setManuFacturer(value);
        }}
      >
        {(manufacturer) => (
          <AutocompleteItem key={manufacturer.id}>
            {manufacturer.value}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};

export default SeacrhManufacturer;
