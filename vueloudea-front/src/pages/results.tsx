import React, { useState } from "react";
import { useRouter } from "next/router";
import FlightResults from "@/components/flightResults";
import { Flight } from "@/types";
import { Icon } from "@iconify/react";

const ResultsPage = () => {
  const router = useRouter();
  const { flights, origin, destination, startDate, endDate, adults, children } = router.query;
  const parsedFlights: Flight[] = JSON.parse(decodeURIComponent(flights as string));

  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);

  function formatDate(dateString: string): string {
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    const options: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("es-ES", options).format(date);
  }

  return (
    <div className="flex h-screen">
      <div className="bg-primary w-[20%] pl-6 pt-12 overflow-hidden">
        {(selectedFlight || origin) && (
          <div className="flex text-white mb-6 items-center">
            <span>
              <Icon icon="ci:paper-plane" className="h-6 w-6" />
            </span>
            <div className="ml-4">
              <p>Origen</p>
              <p className="font-bold">{selectedFlight ? selectedFlight.origin : origin}</p>
            </div>
          </div>
        )}
        {(selectedFlight || destination) && (
          <div className="flex text-white mb-6 items-center">
            <span>
              <Icon icon="ci:paper-plane" className="h-6 w-6 transform rotate-90" />
            </span>
            <div className="ml-4">
              <p>Destino</p>
              <p className="font-bold">
                {selectedFlight ? selectedFlight.destination : destination}
              </p>
            </div>
          </div>
        )}
        {selectedFlight && (
          <div className="flex text-white mb-6 items-center">
            <span>
              <Icon icon="heroicons-outline:calendar" className="h-6 w-6" />
            </span>
            <div className="ml-4">
              <p>Fecha</p>
              <p className="font-bold">{formatDate(selectedFlight.date as string)}</p>
            </div>
          </div>
        )}
        {(startDate || endDate) && !selectedFlight && (
          <div className="flex text-white mb-6 items-center">
            <span>
              <Icon icon="heroicons-outline:calendar" className="h-6 w-6" />
            </span>
            <div className="ml-4">
              <p>Rango de fechas</p>
              <p className="font-bold">{formatDate(startDate as string)} -</p>
              <p className="font-bold">{formatDate(endDate as string)}</p>
            </div>
          </div>
        )}
        {(selectedFlight || adults) && (
          <div className="flex text-white mb-6 items-center">
            <span>
              <Icon icon="healthicons:people-outline" className="h-6 w-6 stroke-current stroke-2" />
            </span>
            <div className="ml-4">
              <p>Adultos</p>
              <p className="font-bold">{selectedFlight ? selectedFlight.adults : adults}</p>
            </div>
          </div>
        )}
        {(selectedFlight || children) && (
          <div className="flex text-white mb-6 items-center">
            <span>
              <Icon icon="healthicons:people-outline" className="h-6 w-6 stroke-current stroke-2" />
            </span>
            <div className="ml-4">
              <p>Niños</p>
              <p className="font-bold">{selectedFlight ? selectedFlight.children : children}</p>
            </div>
          </div>
        )}
      </div>

      <div className="w-[80%] bg-secundary overflow-auto">
        <div className="pl-10 pt-6">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:bg-blue-300"
          >
            Volver
          </button>
        </div>

        <div className="px-8 pt-4 pb-4">
          {parsedFlights.length > 0 ? (
            parsedFlights.map((flight: Flight, index: number) => (
              <div key={index} className="mb-4">
                <FlightResults
                  flight={flight}
                  onSelectFlight={setSelectedFlight}
                  isSelected={selectedFlight?.id === flight.id}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-lg text-gray-600">No se encontraron vuelos.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
