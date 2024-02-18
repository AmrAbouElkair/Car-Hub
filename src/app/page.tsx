"use client";

import {
  Hero,
  SearchBar,
  CustomFilter,
  CarCard,
  ShowMore,
} from "@/components/Home";
import { fuels, yearsOfProduction } from "@/constants";
import { CarProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const [year, setYear] = useState(2022);
  const [fuel, setFuel] = useState("");

  const [limit, setLimit] = useState(20);

  const getCars = async () => {
    setIsLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2022,
        fuel: fuel || "",
        limit: limit || 20,
        model: model || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, year, fuel, limit]);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="max-width mt-12" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setmanufacturer={setManufacturer} setmodel={setModel} />
          <div className="home__filter-container">
            <CustomFilter title="Fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter
              title="Year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: CarProps, i) => (
                <CarCard key={i + car.model} car={car} />
              ))}
            </div>

            {isLoading && (
              <div className="flex-center mt-16 w-full">
                <Image
                  src="/loading.svg"
                  alt="loading"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-xl font-bold text-black">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
