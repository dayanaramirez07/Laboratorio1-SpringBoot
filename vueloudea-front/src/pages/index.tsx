import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import FlightSearch from "@/components/flightSearch";
import { Flight } from "@/types";

export default function Home() {
  const router = useRouter();

  const handleSearch = async (searchParams: Flight) => {
    const query = new URLSearchParams();

    if (searchParams.origin) query.append("origin", searchParams.origin);
    if (searchParams.destination) query.append("destination", searchParams.destination);
    if (searchParams.startDate) query.append("startDate", searchParams.startDate);
    if (searchParams.endDate) query.append("endDate", searchParams.endDate);
    if (searchParams.adults !== undefined) query.append("adults", searchParams.adults.toString());
    if (searchParams.children !== undefined)
      query.append("children", searchParams.children.toString());

    try {
      const response = await axios.get(
        `http://localhost:8080/api/flights/search?${query.toString()}`
      );
      const flights = response.data;

      router.push({
        pathname: "/results",
        query: {
          flights: encodeURIComponent(JSON.stringify(flights)),
          origin: searchParams.origin,
          destination: searchParams.destination,
          startDate: searchParams.startDate,
          endDate: searchParams.endDate,
          adults: searchParams.adults?.toString(),
          children: searchParams.children?.toString(),
        },
      });
    } catch (error) {
      console.error("Error al buscar vuelos:", error);
    }
  };

  return (
    <div className="grid row h-screen">
      <FlightSearch onSearch={handleSearch} />
    </div>
  );
}
