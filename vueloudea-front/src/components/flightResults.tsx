import React from "react";
import { Icon } from "@iconify/react";
import { Flight } from "@/types";

type FlightResultProps = {
  flight: Flight;
  onSelectFlight: (flight: Flight) => void;
  isSelected: boolean;
};

const FlightResults: React.FC<FlightResultProps> = ({ flight, onSelectFlight, isSelected }) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg px-6 py-6 sm:py-8 lg:px-8 grid grid-cols-2 transition-colors ${
        isSelected ? "shadow-black" : "shadow-primary"
      }`}
    >
      <div className="grid grid-rows-1 items-center">
        <div className="flex items-center">
          <span>
            <Icon
              icon="ion:paper-plane"
              className={`h-6 w-6 ${isSelected ? "text-black" : "text-primary"}`}
            />
          </span>
          <p className={`font-bold pl-3 ${isSelected ? "text-black" : "text-primary"}`}>
            {flight.airline}
          </p>
        </div>
        <div className="flex items-center mt-2">
          <span>
            <Icon icon="healthicons:people" className="text-gray-600 h-7 w-7" />
          </span>
          <p className="font-bold text-gray-600 pl-2">
            Asientos disponibles: {flight.seatsAvailable}
          </p>
        </div>
      </div>
      <div className="grid grid-rows-1 justify-end">
        <div className="flex justify-end">
          <p className="font-bold text-shadow text-gray-600">USD$ {flight.price}</p>
        </div>
        <div className="flex mt-2">
          <button
            type="button"
            onClick={() => onSelectFlight(flight)}
            className={`rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-blue-300 ${
              isSelected ? "bg-black" : "bg-primary"
            }`}
          >
            Ver más información
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightResults;
