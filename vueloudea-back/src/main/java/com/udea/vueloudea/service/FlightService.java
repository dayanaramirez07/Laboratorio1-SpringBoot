package com.udea.vueloudea.service;

import com.udea.vueloudea.model.Flight;
import com.udea.vueloudea.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class FlightService {

    @Autowired
    private FlightRepository flightRepository;

    public List<Flight> searchFlights(String origin, String destination, LocalDate startDate, LocalDate endDate, Integer adults, Integer children) {

        String key = (origin != null ? "1" : "0") +
                (destination != null ? "1" : "0") +
                (startDate != null ? "1" : "0") +
                (endDate != null ? "1" : "0") +
                (adults != null ? "1" : "0") +
                (children != null ? "1" : "0");


        switch (key) {
            case "100000":
                return flightRepository.findByOriginContainingIgnoreCase(origin);

            case "010000":
                return flightRepository.findByDestinationContainingIgnoreCase(destination);

            case "001000":
                return flightRepository.findByDateGreaterThanEqual(startDate);

            case "001100":
                return flightRepository.findByDateBetween(startDate, endDate);

            case "110000":
                return flightRepository.findByOriginContainingIgnoreCaseAndDestinationContainingIgnoreCase(origin, destination);

            case "101000":
                return flightRepository.findByOriginContainingIgnoreCaseAndDateGreaterThanEqual(origin, startDate);

            case "101100":
                return flightRepository.findByOriginContainingIgnoreCaseAndDateBetween(origin, startDate, endDate);

            case "011000":
                return flightRepository.findByDestinationContainingIgnoreCaseAndDateGreaterThanEqual(destination, startDate);

            case "011100":
                return flightRepository.findByDestinationContainingIgnoreCaseAndDateBetween(destination, startDate, endDate);

            case "111000":
                return flightRepository.findByOriginContainingIgnoreCaseAndDestinationContainingIgnoreCaseAndDateGreaterThanEqual(origin, destination, startDate);

            case "111100":
                return flightRepository.findByOriginContainingIgnoreCaseAndDestinationContainingIgnoreCaseAndDateBetween(origin, destination, startDate, endDate);

            case "111111":
                return flightRepository.findByOriginContainingIgnoreCaseAndDestinationContainingIgnoreCaseAndDateBetweenAndAdultsAndChildren(
                        origin, destination, startDate, endDate, adults, children);

            default:
                throw new IllegalArgumentException("No se encontró una combinación válida de parámetros.");

        }
    }
}
