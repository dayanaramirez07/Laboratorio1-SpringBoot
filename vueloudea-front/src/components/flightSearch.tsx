import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Flight } from "@/types";

type FlightSearchProps = {
  onSearch: (searchParams: Flight) => Promise<void>;
};

const FlightSearch: React.FC<FlightSearchProps> = ({ onSearch }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState<number | undefined>(undefined);
  const [children, setChildren] = useState<number | undefined>(undefined);

  const today = new Date().toISOString().split("T")[0];
  const isFormValid = origin || destination || startDate || endDate;

  const handleSearch = async () => {
    const searchParams: Flight = {
      origin,
      destination,
      startDate,
      endDate,
      adults: adults || undefined,
      children: children || undefined,
    };
    await onSearch(searchParams);
  };

  const handleAdultsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue >= 1) {
      setAdults(parsedValue);
    }
  };

  const handleChildrenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setChildren(parsedValue);
    }
  };

  return (
    <div className="flex justify-center items-center bg-secundary">
      <div className="bg-white shadow-lg shadow-primary rounded-lg px-6 py-6 sm:py-8 lg:px-8 w-3/4">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Búsqueda de vuelos</h2>
          <p className="mt-2">Encuentra el vuelo que necesitas</p>
        </div>
        <form action="#" method="POST" className="mt-6 sm:mt-8" autoComplete="off">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="origin" className="text-sm font-semibold leading-6 text-gray-900">
                Origen
              </label>
              <div className="relative">
                <input
                  id="origin"
                  name="origin"
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
                <span className="absolute inset-y-0 right-8 flex items-center">
                  <div className="w-px h-6 bg-gray-300"></div>
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-1.5">
                  <Icon icon="bx:map" className="text-blue-500 h-5 w-5" />
                </span>
              </div>
            </div>
            <div>
              <label
                htmlFor="destination"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Destino
              </label>
              <div className="relative">
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
                <span className="absolute inset-y-0 right-8 flex items-center">
                  <div className="w-px h-6 bg-gray-300"></div>
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-1.5">
                  <Icon icon="bx:map" className="text-blue-500 h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 md-custom:grid-cols-4 mt-6">
            <div>
              <label htmlFor="start-date" className="text-sm font-semibold leading-6 text-gray-900">
                Fecha inicial
              </label>
              <div className="relative">
                <input
                  id="start-date"
                  name="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={today}
                  className="w-full rounded-md border-0 px-8 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-500">
                  <Icon icon="heroicons-outline:calendar" />
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="end-date" className="text-sm font-semibold leading-6 text-gray-900">
                Fecha final
              </label>
              <div className="relative">
                <input
                  id="end-date"
                  name="end-date"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate}
                  disabled={!startDate}
                  className="w-full rounded-md border-0 px-8 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 disabled:bg-secundary disabled:text-gray-500"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-blue-500 z-20">
                  <Icon icon="heroicons-outline:calendar" />
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="adults" className="text-sm font-semibold leading-6 text-gray-900">
                Adultos
              </label>
              <div>
                <input
                  id="adults"
                  name="adults"
                  type="number"
                  value={adults ?? ""}
                  onChange={handleAdultsChange}
                  className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="children" className="text-sm font-semibold leading-6 text-gray-900">
                Niños
              </label>
              <div>
                <input
                  id="children"
                  name="children"
                  type="number"
                  value={children ?? ""}
                  onChange={handleChildrenChange}
                  className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSearch}
              disabled={!isFormValid}
              className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:bg-blue-300"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightSearch;
