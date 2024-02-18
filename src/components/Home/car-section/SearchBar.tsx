"use client";

import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { manufacturers } from "@/constants";
import { useRouter } from "next/navigation";
import { handleUrlChange } from "@/utils";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";

const SearchBar = ({
  setmanufacturer,
  setmodel,
}: {
  setmanufacturer: (value: string) => void;
  setmodel: (value: string) => void;
}) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setmanufacturer(searchManufacturer);
    setmodel(searchModel);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-3xl items-center justify-start gap-x-0 max-sm:flex-col max-sm:gap-y-3 sm:gap-x-3"
    >
      <div className="flex flex-1 items-center justify-start max-sm:w-full">
        <Autocomplete
          startContent={
            <i className="fa-solid fa-gauge fa-lg mr-2 text-slate-400"></i>
          }
          placeholder="Choose A Car"
          variant="flat"
          radius="lg"
          size="sm"
          name="manufacturer"
          id="manufacturer"
          aria-label="manufacturer"
          aria-labelledby="manufacturer"
          defaultItems={manufacturers}
          onInputChange={(value) =>
            setSearchManufacturer(value.trim().toLowerCase())
          }
        >
          {(manufacturer) => (
            <AutocompleteItem key={manufacturer.id}>
              {manufacturer.value}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </div>
      <div className="flex flex-1 items-center justify-start max-sm:w-full">
        <Input
          isClearable
          type="text"
          placeholder="Model"
          variant="flat"
          size="sm"
          radius="lg"
          name="model"
          id="model"
          aria-label="model"
          aria-labelledby="model"
          value={searchModel}
          onValueChange={(value) => setSearchModel(value.trim().toLowerCase())}
          startContent={
            <i className="fa-solid fa-car fa-lg mr-2 text-black/50 text-slate-400"></i>
          }
        />
      </div>
      <Button
        type="submit"
        variant="flat"
        size="sm"
        radius="lg"
        className="flex items-center justify-center gap-x-2"
      >
        Submit
      </Button>
    </form>
  );
};

export default SearchBar;
