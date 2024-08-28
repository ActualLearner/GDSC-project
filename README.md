# GDSC-project
# Car Rental Management System

## Overview

This repository contains the backend implementation for a car rental management system. The system provides APIs to manage cars and bookings.

## API Endpoints

### Car Management

- **GET /api/cars**
  - Retrieves a list of all available cars.

- **GET /api/cars/:model**
  - Retrieves cars based on a specific model.

- **POST /api/cars**
  - Creates a new car entry.

- **PUT /api/cars/:id**
  - Updates an existing car by its ID.

- **DELETE /api/cars/:id**
  - Deletes a car by its ID.

### Booking Management

- **GET /api/bookings**
  - Retrieves a list of all bookings.

- **POST /api/bookings**
  - Creates a new booking.

- **PUT /api/bookings/:id**
  - Updates an existing booking by its ID.

- **DELETE /api/bookings/:id**
  - Deletes a booking by its ID.
