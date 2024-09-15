package com.udea.vueloudea.repository;

import com.udea.vueloudea.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Long> {

    // Buscar por origen
    List<Flight> findByOriginContainingIgnoreCase(String origin);

    // Buscar por destino
    List<Flight> findByDestinationContainingIgnoreCase(String destination);

    // Buscar por fecha inicial
    List<Flight> findByDateGreaterThanEqual(LocalDate startDate);

    // Buscar por rango de fechas
    List<Flight> findByDateBetween(LocalDate startDate, LocalDate endDate);

    // Buscar por origen y destino
    List<Flight> findByOriginContainingIgnoreCaseAndDestinationContainingIgnoreCase(String origin, String destination);

    // Buscar por origen y fecha inicial
    List<Flight> findByOriginContainingIgnoreCaseAndDateGreaterThanEqual(String origin, LocalDate starDate);

    // Buscar por origen y fechas
    List<Flight> findByOriginContainingIgnoreCaseAndDateBetween(String origin, LocalDate startDate, LocalDate endDate);

    // Buscar por destino y fecha inicial
    List<Flight> findByDestinationContainingIgnoreCaseAndDateGreaterThanEqual(String destination, LocalDate starDate);

    // Buscar por destino y fechas
    List<Flight> findByDestinationContainingIgnoreCaseAndDateBetween(String destination, LocalDate startDate, LocalDate endDate);

    // Buscar por origen, destino y fecha inicial
    List<Flight> findByOriginContainingIgnoreCaseAndDestinationContainingIgnoreCaseAndDateGreaterThanEqual(String origin, String destination, LocalDate startDate);

    // Buscar por origen, destino y fechas
    List<Flight> findByOriginContainingIgnoreCaseAndDestinationContainingIgnoreCaseAndDateBetween(
            String origin, String destination, LocalDate startDate, LocalDate endDate);

    // Agregar filtros por adultos y niños
    List<Flight> findByOriginContainingIgnoreCaseAndDestinationContainingIgnoreCaseAndDateBetweenAndAdultsAndChildren(
            String origin, String destination, LocalDate startDate, LocalDate endDate, int adults, int children);

}
