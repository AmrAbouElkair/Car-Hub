"use client";

import { CustomFilterProps } from "@/types";
import { handleUrlChange } from "@/utils";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { useRouter } from "next/navigation";

interface CustomFilterPropsExtended extends CustomFilterProps {
  setFilter: (value: any) => void;
}

const CustomFilter = ({
  title,
  options,
  setFilter,
}: CustomFilterPropsExtended) => {
  // const router = useRouter();

  return (
    <>
      <div>
        <Autocomplete
          isClearable={false}
          defaultItems={options}
          size="sm"
          name={title}
          id={title}
          aria-label={title}
          aria-labelledby={title}
          className="w-[150px]"
          placeholder={title === "Year" ? "Year (2022)" : "Fuel"}
          onInputChange={(value) => setFilter(value.trim().toLowerCase())}
          startContent={
            <i
              className={`${
                title === "Fuel"
                  ? "fa-solid fa-gas-pump"
                  : "fa-regular fa-calendar-days"
              } mr-2 text-slate-500`}
            ></i>
          }
        >
          {(option) => (
            <AutocompleteItem key={option.title}>
              {option.title}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </div>
    </>
  );
};

export default CustomFilter;
