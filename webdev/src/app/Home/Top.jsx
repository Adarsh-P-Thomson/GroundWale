// Top.jsx
"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";

import BangalorePng from "@/app/assets/Cities/Bangalore.png";
import ChennaiPng from "@/app/assets/Cities/Chennai.png";
import HydrabadPng from "@/app/assets/Cities/Hydrabad.png";
import MumbaiPng from "@/app/assets/Cities/Mumbai.png";
import PunePng from "@/app/assets/Cities/Pune.png";
import DelhiPng from "@/app/assets/Cities/Delhi.png";
import AhmadabadPng from "@/app/assets/Cities/Ahmadabad.png";
import CityPng from "@/app/assets/Cities/City.png";

export default function Top() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [locationSearchTerm, setLocationSearchTerm] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const autocompleteService = useRef(null);
  const placesService = useRef(null);

  const cities = [
    { name: "Bangalore", img: BangalorePng },
    { name: "Chennai", img: ChennaiPng },
    { name: "Hyderabad", img: HydrabadPng },
    { name: "Mumbai", img: MumbaiPng },
    { name: "Pune", img: PunePng },
    { name: "Delhi", img: DelhiPng },
    { name: "Ahmedabad", img: AhmadabadPng },
    { name: "Kolkata", img: CityPng },
  ];

  const otherCities = [
    ["Coimbatore", "Gurgaon", "Jaipur", "Kochi", "Lucknow"],
    ["Madurai", "Mysore", "Noida", "Trivandrum", "Warangal"],
    ["Tirupati", "Vijaywada", "Visakhapatnam", "Bhubaneswar", "Guntur"],
  ];

  useEffect(() => {
    const initializeServices = () => {
      if (window.google && window.google.maps) {
        autocompleteService.current =
          new window.google.maps.places.AutocompleteService();
        const mapDiv = document.createElement("div");
        const map = new window.google.maps.Map(mapDiv);
        placesService.current = new window.google.maps.places.PlacesService(map);
      }
    };

    if (typeof window !== "undefined" && window.google && window.google.maps) {
      initializeServices();
      return;
    }

    const scriptSrc = `https://maps.googleapis.com/maps/api/js?key=Your_Google_Api&libraries=places`;
    let script = document.querySelector(`script[src="${scriptSrc}"]`);

    if (script) {
      script.addEventListener("load", initializeServices);
      script.addEventListener("error", () => {
        console.error("Google Maps script failed to load.");
      });
    } else {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.defer = true;
      script.onload = initializeServices;
      script.onerror = () => {
        console.error("Google Maps script failed to load.");
      };
      document.head.appendChild(script);
    }

    return () => {
      if (script) {
        script.removeEventListener("load", initializeServices);
        script.removeEventListener("error", () => {
          console.error("Google Maps script failed to load.");
        });
      }
    };
  }, []);

  const allCityNames = useMemo(() => {
    const mainCityNames = cities.map((c) => c.name);
    const otherCityNames = otherCities.flat();
    return Array.from(new Set([...mainCityNames, ...otherCityNames]));
  }, []);

  const searchResults = useMemo(() => {
    if (!searchTerm) {
      return [];
    }
    const lowerCaseSearch = searchTerm.toLowerCase();
    return allCityNames.filter((name) =>
      name.toLowerCase().includes(lowerCaseSearch)
    );
  }, [searchTerm, allCityNames]);

  const handleCitySelect = (cityName) => {
    setSelectedCity(cityName);
    setIsModalOpen(false);
    setSearchTerm("");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationClick = () => {
    setIsLocationModalOpen(true);
  };

  const handleLocationSearchChange = (e) => {
    const value = e.target.value;
    setLocationSearchTerm(value);

    if (value.trim() === "") {
      setPredictions([]);
      return;
    }

    if (autocompleteService.current) {
      autocompleteService.current.getPlacePredictions(
        {
          input: value,
          componentRestrictions: { country: "in" },
          types: ["geocode", "establishment"],
        },
        (results, status) => {
          if (
            status === window.google.maps.places.PlacesServiceStatus.OK &&
            results
          ) {
            setPredictions(results);
          } else {
            setPredictions([]);
          }
        }
      );
    }
  };

  const handleLocationSelect = (prediction) => {
    setSelectedLocation(prediction.description);
    setLocationSearchTerm(prediction.description);
    setIsLocationModalOpen(false);
    setPredictions([]);
  };

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      setIsLoadingLocation(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          if (window.google && placesService.current) {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode(
              { location: { lat: latitude, lng: longitude } },
              (results, status) => {
                setIsLoadingLocation(false);
                if (status === "OK" && results[0]) {
                  setSelectedLocation(results[0].formatted_address);
                  setLocationSearchTerm(results[0].formatted_address);
                  setIsLocationModalOpen(false);
                  setPredictions([]);
                }
              }
            );
          }
        },
        (error) => {
          setIsLoadingLocation(false);
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const clearLocationSearch = () => {
    setLocationSearchTerm("");
    setPredictions([]);
  };

  return (
    <>
      <section className="hero">
        <div className="content">
          <h1>Book Your Ground</h1>

          <div className="controls">
            <div className="location card" onClick={handleLocationClick}>
              <div className="left">
                <span className="icon pin" aria-hidden>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      d="M12 2C8.686 2 6 4.686 6 8c0 4.77 6 13 6 13s6-8.23 6-13c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div className="labels">
                  <div className="primary">{selectedCity}</div>
                  <div className="secondary">
                    {selectedLocation || "Select your location"}
                  </div>
                </div>
              </div>
              <span className="icon caret" aria-hidden>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    d="M7 10l5 5 5-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            <div className="search card">
              <input
                type="text"
                placeholder="What service do you need?"
                aria-label="What service do you need?"
              />
              <span className="icon searchIcon" aria-hidden>
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M16.5 16.5L21 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <style jsx>{`
          * {
            box-sizing: border-box;
          }

          .hero {
            margin-left: 6cm;
            margin-right: 6cm;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif;
            padding-top: 3cm;
            padding-bottom: 1cm;
          }

          .content {
            width: 100%;
            text-align: center;
          }

          h1 {
            width: 13cm;
            margin: 0 auto;
            font-weight: 600;
            font-size: 1.25cm;
            line-height: 1.2;
            letter-spacing: -0.02em;
            color: #2f3747;
          }

          .controls {
            width: 22.8cm;
            margin: 1.6cm auto 0;
            display: grid;
            grid-template-columns: 8.5cm 13.5cm;
            gap: 0.8cm;
            align-items: center;
            justify-content: center;
          }

          .card {
            width: 100%;
            height: 1.5cm;
            border: 0.04cm solid #d8e5fb;
            background: #ffffff;
            border-radius: 0.42cm;
            display: flex;
            align-items: center;
            padding: 0 0.55cm;
            box-shadow: 0 0.03cm 0 rgba(17, 24, 39, 0.02);
          }

          .location {
            justify-content: space-between;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .location:hover {
            border-color: #b8d4f7;
            box-shadow: 0 0.05cm 0.15cm rgba(17, 24, 39, 0.06);
          }

          .left {
            display: flex;
            align-items: center;
            gap: 0.3cm;
            overflow: hidden;
          }

          .icon {
            display: inline-flex;
            color: #6b7280;
          }

          .labels {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            line-height: 1.15;
            overflow: hidden;
          }

          .primary {
            font-size: 0.45cm;
            font-weight: 600;
            color: #111827;
            margin-bottom: 0.08cm;
          }

          .secondary {
            font-size: 0.38cm;
            color: #6b7280;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .search {
            position: relative;
            display: flex;
            align-items: center;
            padding-right: 1.2cm;
          }

          .search input {
            appearance: none;
            border: none;
            outline: none;
            width: 100%;
            height: 100%;
            font-size: 0.42cm;
            color: #111827;
            padding: 0 0.15cm;
            background: transparent;
          }

          .search input::placeholder {
            color: #6b7280;
            font-weight: 500;
          }

          .searchIcon {
            position: absolute;
            right: 0.5cm;
            top: 50%;
            transform: translateY(-50%);
            color: #4b5563;
          }

          @media (max-width: 1024px) {
            .hero {
              margin-left: 2cm;
              margin-right: 2cm;
              padding-top: 2cm;
            }

            h1 {
              width: 100%;
              font-size: 1cm;
            }

            .controls {
              width: 100%;
              grid-template-columns: 1fr;
              gap: 0.5cm;
              margin: 1cm auto 0;
            }

            .card {
              height: 1.4cm;
            }

            .primary {
              font-size: 0.42cm;
            }

            .secondary {
              font-size: 0.36cm;
            }
          }

          @media (max-width: 768px) {
            .hero {
              margin-left: 1cm;
              margin-right: 1cm;
              padding-top: 1.5cm;
              padding-bottom: 0.8cm;
            }

            h1 {
              font-size: 0.85cm;
            }

            .controls {
              margin: 0.8cm auto 0;
              gap: 0.4cm;
            }

            .card {
              height: 1.3cm;
              padding: 0 0.45cm;
              border-radius: 0.35cm;
            }

            .left {
              gap: 0.25cm;
            }

            .primary {
              font-size: 0.4cm;
              margin-bottom: 0.05cm;
            }

            .secondary {
              font-size: 0.34cm;
            }

            .search input {
              font-size: 0.38cm;
            }

            .searchIcon {
              right: 0.45cm;
            }
          }

          @media (max-width: 480px) {
            .hero {
              margin-left: 0.5cm;
              margin-right: 0.5cm;
              padding-top: 1cm;
              padding-bottom: 0.6cm;
            }

            h1 {
              font-size: 0.7cm;
            }

            .controls {
              margin: 0.6cm auto 0;
              gap: 0.35cm;
            }

            .card {
              height: 1.2cm;
              padding: 0 0.4cm;
              border-radius: 0.3cm;
            }

            .left {
              gap: 0.2cm;
            }

            .icon.pin svg {
              width: 20px;
              height: 20px;
            }

            .icon.caret svg {
              width: 14px;
              height: 14px;
            }

            .primary {
              font-size: 0.38cm;
            }

            .secondary {
              font-size: 0.32cm;
            }

            .search input {
              font-size: 0.36cm;
            }

            .searchIcon svg {
              width: 18px;
              height: 18px;
            }

            .searchIcon {
              right: 0.4cm;
            }
          }
        `}</style>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Pick your city</h2>
              <button
                className="close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>

            <div className="search-box">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                className="search-icon"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M16.5 16.5L21 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search for your city"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            <div className="modal-content-scrollable">
              {!searchTerm && (
                <>
                  <div className="cities-grid">
                    {cities.map((city) => (
                      <div
                        key={city.name}
                        className="city-item"
                        onClick={() => handleCitySelect(city.name)}
                      >
                        <div className="city-icon">
                          <Image
                            src={city.img}
                            alt={city.name}
                            width={80}
                            height={80}
                            className="city-img"
                            priority
                          />
                        </div>
                        <div className="city-name">{city.name}</div>
                      </div>
                    ))}
                  </div>

                  <div className="divider"></div>

                  <div className="other-cities-section">
                    <h3>Other cities</h3>
                    <div className="other-cities-grid">
                      {otherCities.map((row, rowIndex) => (
                        <div key={rowIndex} className="city-row">
                          {row.map((city) => (
                            <div
                              key={city}
                              className="other-city"
                              onClick={() => handleCitySelect(city)}
                            >
                              {city}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <button className="show-more">Show More</button>
                  </div>
                </>
              )}

              {searchTerm && (
                <div className="search-results">
                  {searchResults.length > 0 ? (
                    searchResults.map((city) => (
                      <div
                        key={city}
                        className="search-result-item"
                        onClick={() => handleCitySelect(city)}
                      >
                        {city}
                      </div>
                    ))
                  ) : (
                    <div className="no-results">No city found</div>
                  )}
                </div>
              )}
            </div>
          </div>

          <style jsx>{`
            .modal-overlay {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.5);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
              animation: fadeIn 0.2s ease;
              backdrop-filter: saturate(120%);
              padding: 2vh;
            }

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes popIn {
              from { opacity: 0; transform: scale(0.98); }
              to { opacity: 1; transform: scale(1); }
            }

            .modal-container {
              width: 22.5cm;
              max-width: 92vw;
              max-height: 85vh;
              background: #ffffff;
              border-radius: 0.5cm;
              box-shadow: 0 0.5cm 2cm rgba(0, 0, 0, 0.15);
              display: flex;
              flex-direction: column;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Helvetica, Arial, sans-serif;
              overflow: hidden;
              animation: popIn 0.18s ease;
            }

            .modal-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0.6cm 1.1cm 0.5cm 1.1cm;
            }

            .modal-header h2 {
              margin: 0;
              font-size: 0.65cm;
              font-weight: 600;
              color: #2d3748;
              letter-spacing: -0.01em;
            }

            .close-btn {
              background: none;
              border: none;
              cursor: pointer;
              color: #4a5568;
              padding: 0.15cm;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 0.15cm;
              transition: all 0.15s ease;
            }

            .close-btn:hover {
              background: #f7fafc;
              color: #2d3748;
            }

            .search-box {
              margin: 0 1.1cm 0.6cm 1.1cm;
              position: relative;
              display: flex;
              align-items: center;
            }

            .search-icon {
              position: absolute;
              left: 0.45cm;
              color: #a0aec0;
            }

            .search-box input {
              width: 100%;
              height: 1.1cm;
              border: 0.04cm solid #e2e8f0;
              border-radius: 0.25cm;
              padding: 0 0.45cm 0 1.35cm;
              font-size: 0.42cm;
              color: #2d3748;
              outline: none;
              transition: all 0.2s ease;
            }

            .search-box input::placeholder {
              color: #a0aec0;
            }

            .search-box input:focus {
              border-color: #cbd5e0;
              box-shadow: 0 0 0 0.08cm rgba(203, 213, 224, 0.3);
            }

            .modal-content-scrollable {
              overflow-y: auto;
              max-height: 60vh;
            }

            .search-results {
              padding: 0 1.1cm 0.6cm 1.1cm;
              display: flex;
              flex-direction: column;
              gap: 0.05cm;
            }

            .search-result-item {
              padding: 0.4cm 0.2cm;
              font-size: 0.42cm;
              color: #4a5568;
              font-weight: 500;
              cursor: pointer;
              border-radius: 0.15cm;
              transition: all 0.15s ease;
            }

            .search-result-item:hover {
              background: #f7fafc;
              color: #2d3748;
            }

            .no-results {
              text-align: center;
              padding: 1.5cm 0;
              color: #a0aec0;
              font-size: 0.42cm;
            }

            .cities-grid {
              display: grid;
              grid-template-columns: repeat(8, 1fr);
              gap: 0;
              padding: 0 1.1cm;
              margin-bottom: 0.4cm;
            }

            .city-item {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 0.2cm 0.2cm 0.3cm 0.2cm;
              cursor: pointer;
              transition: all 0.2s ease;
              border-radius: 0.25cm;
            }

            .city-item:hover {
              background: #f7fafc;
            }

            .city-icon {
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 0.15cm;
            }

            .city-img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              image-rendering: -webkit-optimize-contrast;
            }

            .city-name {
              font-size: 0.35cm;
              color: #2d3748;
              font-weight: 500;
              text-align: center;
            }

            .divider {
              height: 0.03cm;
              background: #e2e8f0;
              margin: 0.4cm 1.1cm;
            }

            .other-cities-section {
              padding: 0 1.1cm 0.6cm 1.1cm;
            }

            .other-cities-section h3 {
              margin: 0 0 0.4cm 0;
              font-size: 0.45cm;
              font-weight: 600;
              color: #2d3748;
              text-align: center;
            }

            .other-cities-grid {
              display: flex;
              flex-direction: column;
              gap: 0.3cm;
              margin-bottom: 0.4cm;
            }

            .city-row {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 0.8cm;
            }

            .other-city {
              font-size: 0.38cm;
              color: #4a5568;
              font-weight: 500;
              cursor: pointer;
              transition: color 0.15s ease;
            }

            .other-city:hover {
              color: #2d3748;
            }

            .show-more {
              display: block;
              margin: 0 auto;
              background: none;
              border: none;
              color: #3182ce;
              font-size: 0.38cm;
              font-weight: 600;
              cursor: pointer;
              padding: 0.2cm 0.5cm;
              border-radius: 0.15cm;
              transition: all 0.15s ease;
            }

            .show-more:hover {
              background: #ebf8ff;
            }

            @media (max-width: 1024px) {
              .modal-container {
                width: 85vw;
              }

              .modal-header {
                padding: 0.5cm 0.9cm 0.4cm 0.9cm;
              }

              .modal-header h2 {
                font-size: 0.55cm;
              }

              .search-box {
                margin: 0 0.9cm 0.5cm 0.9cm;
              }

              .cities-grid {
                grid-template-columns: repeat(4, 1fr);
                padding: 0 0.9cm;
                gap: 0.3cm;
              }

              .city-item {
                padding: 0.3cm 0.15cm;
              }

              .city-icon {
                width: 35px;
                height: 35px;
                margin-bottom: 0.12cm;
              }

              .city-name {
                font-size: 0.32cm;
              }

              .divider {
                margin: 0.35cm 0.9cm;
              }

              .other-cities-section {
                padding: 0 0.9cm 0.5cm 0.9cm;
              }

              .city-row {
                grid-template-columns: repeat(3, 1fr);
                gap: 0.6cm;
              }

              .other-city {
                font-size: 0.36cm;
              }

              .search-results {
                padding: 0 0.9cm 0.5cm 0.9cm;
              }
            }

            @media (max-width: 768px) {
              .modal-container {
                width: 90vw;
                max-height: 80vh;
                border-radius: 0.4cm;
              }

              .modal-header {
                padding: 0.45cm 0.7cm 0.35cm 0.7cm;
              }

              .modal-header h2 {
                font-size: 0.5cm;
              }

              .close-btn svg {
                width: 22px;
                height: 22px;
              }

              .search-box {
                margin: 0 0.7cm 0.45cm 0.7cm;
              }

              .search-box input {
                height: 1cm;
                font-size: 0.38cm;
                padding: 0 0.4cm 0 1.2cm;
              }

              .search-icon {
                left: 0.4cm;
                width: 18px;
                height: 18px;
              }

              .cities-grid {
                grid-template-columns: repeat(4, 1fr);
                padding: 0 0.7cm;
                gap: 0.25cm;
              }

              .city-item {
                padding: 0.25cm 0.1cm;
              }

              .city-icon {
                width: 32px;
                height: 32px;
                margin-bottom: 0.1cm;
              }

              .city-name {
                font-size: 0.3cm;
              }

              .divider {
                margin: 0.3cm 0.7cm;
              }

              .other-cities-section {
                padding: 0 0.7cm 0.45cm 0.7cm;
              }

              .other-cities-section h3 {
                font-size: 0.4cm;
                margin-bottom: 0.35cm;
              }

              .city-row {
                grid-template-columns: repeat(2, 1fr);
                gap: 0.5cm;
              }

              .other-city {
                font-size: 0.34cm;
              }

              .show-more {
                font-size: 0.36cm;
                padding: 0.18cm 0.4cm;
              }

              .search-results {
                padding: 0 0.7cm 0.45cm 0.7cm;
              }

              .search-result-item {
                padding: 0.35cm 0.18cm;
                font-size: 0.38cm;
              }
            }

            @media (max-width: 480px) {
              .modal-container {
                width: 95vw;
                max-height: 75vh;
                border-radius: 0.35cm;
              }

              .modal-header {
                padding: 0.4cm 0.6cm 0.3cm 0.6cm;
              }

              .modal-header h2 {
                font-size: 0.45cm;
              }

              .close-btn {
                padding: 0.12cm;
              }

              .close-btn svg {
                width: 20px;
                height: 20px;
              }

              .search-box {
                margin: 0 0.6cm 0.4cm 0.6cm;
              }

              .search-box input {
                height: 0.95cm;
                font-size: 0.36cm;
                padding: 0 0.35cm 0 1.1cm;
                border-radius: 0.2cm;
              }

              .search-icon {
                left: 0.35cm;
                width: 16px;
                height: 16px;
              }

              .cities-grid {
                grid-template-columns: repeat(3, 1fr);
                padding: 0 0.6cm;
                gap: 0.2cm;
              }

              .city-item {
                padding: 0.22cm 0.08cm;
              }

              .city-icon {
                width: 28px;
                height: 28px;
                margin-bottom: 0.08cm;
              }

              .city-name {
                font-size: 0.28cm;
              }

              .divider {
                margin: 0.28cm 0.6cm;
              }

              .other-cities-section {
                padding: 0 0.6cm 0.4cm 0.6cm;
              }

              .other-cities-section h3 {
                font-size: 0.38cm;
                margin-bottom: 0.3cm;
              }

              .other-cities-grid {
                gap: 0.25cm;
              }

              .city-row {
                grid-template-columns: repeat(2, 1fr);
                gap: 0.4cm;
              }

              .other-city {
                font-size: 0.32cm;
              }

              .show-more {
                font-size: 0.34cm;
                padding: 0.16cm 0.35cm;
              }

              .search-results {
                padding: 0 0.6cm 0.4cm 0.6cm;
              }

              .search-result-item {
                padding: 0.32cm 0.16cm;
                font-size: 0.36cm;
              }

              .no-results {
                padding: 1.2cm 0;
                font-size: 0.38cm;
              }
            }
          `}</style>
        </div>
      )}

      {isLocationModalOpen && (
        <div
          className="location-modal-overlay"
          onClick={() => setIsLocationModalOpen(false)}
        >
          <div
            className="location-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="location-modal-header">
              <div className="location-header-left">
                <h2 className="location-city-name">{selectedCity}</h2>
                <button
                  className="change-city-btn"
                  onClick={() => {
                    setIsLocationModalOpen(false);
                    setIsModalOpen(true);
                  }}
                >
                  Change
                </button>
              </div>
              <button
                className="location-close-btn"
                onClick={() => setIsLocationModalOpen(false)}
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>

            <div className="location-search-wrapper">
              <div className="location-search-box">
                <input
                  type="text"
                  placeholder="Search your area or landmark"
                  value={locationSearchTerm}
                  onChange={handleLocationSearchChange}
                  className="location-search-input"
                />
                {locationSearchTerm && (
                  <button
                    className="clear-search-btn"
                    onClick={clearLocationSearch}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </button>
                )}
              </div>

              <button
                className="detect-location-btn"
                onClick={handleDetectLocation}
                disabled={isLoadingLocation}
              >
                {isLoadingLocation ? (
                  <div className="spinner"></div>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    className="location-icon"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 2v4m0 12v4M2 12h4m12 0h4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
                <span className="detect-text">
                  {isLoadingLocation ? "Detecting location..." : "Detect my location (recommended)"}
                </span>
              </button>
            </div>

            {predictions.length > 0 && (
              <div className="predictions-list">
                {predictions.map((prediction) => (
                  <div
                    key={prediction.place_id}
                    className="prediction-item"
                    onClick={() => handleLocationSelect(prediction)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      className="prediction-icon"
                    >
                      <path
                        d="M12 2C8.686 2 6 4.686 6 8c0 4.77 6 13 6 13s6-8.23 6-13c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5z"
                        fill="currentColor"
                      />
                    </svg>
                    <div className="prediction-content">
                      <div className="prediction-main">
                        {prediction.structured_formatting.main_text}
                      </div>
                      <div className="prediction-secondary">
                        {prediction.structured_formatting.secondary_text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {!locationSearchTerm && predictions.length === 0 && !isLoadingLocation && (
              <div className="location-empty-state">
                <svg
                  viewBox="0 0 24 24"
                  width="80"
                  height="80"
                  className="empty-icon"
                >
                  <path
                    d="M12 2C8.686 2 6 4.686 6 8c0 4.77 6 13 6 13s6-8.23 6-13c0-3.314-2.686-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5.5a2.5 2.5 0 0 1 0 5z"
                    fill="currentColor"
                  />
                </svg>
                <p className="empty-text">
                  We only use your location to show the most relevant prices near
                  you
                </p>
              </div>
            )}

            {isLoadingLocation && !locationSearchTerm && predictions.length === 0 && (
              <div className="location-empty-state">
                <div className="spinner-large"></div>
                <p className="empty-text">Detecting your location...</p>
              </div>
            )}
          </div>

          <style jsx>{`
            .location-modal-overlay {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.5);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 10000;
              animation: fadeIn 0.2s ease;
              backdrop-filter: saturate(120%);
              padding: 2vh;
            }

            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes popIn {
              from { opacity: 0; transform: scale(0.98); }
              to { opacity: 1; transform: scale(1); }
            }

            .location-modal-container {
              width: 15cm;
              max-width: 92vw;
              max-height: 85vh;
              background: #ffffff;
              border-radius: 0.5cm;
              box-shadow: 0 0.5cm 2cm rgba(0, 0, 0, 0.15);
              display: flex;
              flex-direction: column;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                Helvetica, Arial, sans-serif;
              overflow: hidden;
              animation: popIn 0.18s ease;
            }

            .location-modal-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0.6cm 1.1cm 0.5cm 1.1cm;
            }

            .location-header-left {
              display: flex;
              align-items: center;
              gap: 0.4cm;
            }

            .location-city-name {
              margin: 0;
              font-size: 0.65cm;
              font-weight: 600;
              color: #2d3748;
              letter-spacing: -0.01em;
            }

            .change-city-btn {
              background: none;
              border: none;
              color: #3182ce;
              font-size: 0.42cm;
              font-weight: 600;
              cursor: pointer;
              padding: 0.15cm 0.3cm;
              border-radius: 0.1cm;
              transition: all 0.15s ease;
              text-decoration: underline;
            }

            .change-city-btn:hover {
              background: #ebf8ff;
            }

            .location-close-btn {
              background: none;
              border: none;
              cursor: pointer;
              color: #4a5568;
              padding: 0.15cm;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 0.15cm;
              transition: all 0.15s ease;
            }

            .location-close-btn:hover {
              background: #f7fafc;
              color: #2d3748;
            }

            .location-search-wrapper {
              padding: 0 1.1cm 0.6cm 1.1cm;
            }

            .location-search-box {
              position: relative;
              width: 100%;
              margin-bottom: 0.5cm;
            }

            .location-search-input {
              width: 100%;
              height: 1.1cm;
              border: 0.04cm solid #e2e8f0;
              border-radius: 0.25cm;
              padding: 0 2.5cm 0 0.45cm;
              font-size: 0.42cm;
              color: #2d3748;
              outline: none;
              transition: all 0.2s ease;
            }

            .location-search-input::placeholder {
              color: #a0aec0;
            }

            .location-search-input:focus {
              border-color: #cbd5e0;
              box-shadow: 0 0 0 0.08cm rgba(203, 213, 224, 0.3);
            }

            .clear-search-btn {
              position: absolute;
              right: 0.4cm;
              top: 50%;
              transform: translateY(-50%);
              background: none;
              border: none;
              cursor: pointer;
              color: #718096;
              padding: 0.15cm;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              transition: all 0.15s ease;
            }

            .clear-search-btn:hover {
              background: #edf2f7;
              color: #2d3748;
            }

            .detect-location-btn {
              width: 100%;
              display: flex;
              align-items: center;
              gap: 0.3cm;
              padding: 0.4cm 0.5cm;
              background: #ffffff;
              border: 0.04cm solid #e2e8f0;
              border-radius: 0.25cm;
              cursor: pointer;
              transition: all 0.2s ease;
              font-size: 0.42cm;
              color: #3182ce;
              font-weight: 500;
            }

            .detect-location-btn:hover:not(:disabled) {
              background: #f7fafc;
              border-color: #cbd5e0;
            }

            .detect-location-btn:disabled {
              cursor: not-allowed;
              opacity: 0.7;
            }

            .location-icon {
              color: #3182ce;
              flex-shrink: 0;
            }

            .detect-text {
              flex: 1;
              text-align: left;
            }

            .spinner {
              width: 20px;
              height: 20px;
              border: 2px solid #e2e8f0;
              border-top-color: #3182ce;
              border-radius: 50%;
              animation: spin 0.6s linear infinite;
              flex-shrink: 0;
            }

            .spinner-large {
              width: 60px;
              height: 60px;
              border: 4px solid #e2e8f0;
              border-top-color: #3182ce;
              border-radius: 50%;
              animation: spin 0.8s linear infinite;
              margin-bottom: 0.8cm;
            }

            @keyframes spin {
              to { transform: rotate(360deg); }
            }

            .predictions-list {
              flex: 1;
              overflow-y: auto;
              padding: 0 1.1cm 0.6cm 1.1cm;
              max-height: 60vh;
            }

            .prediction-item {
              display: flex;
              align-items: flex-start;
              gap: 0.4cm;
              padding: 0.4cm 0.2cm;
              cursor: pointer;
              border-radius: 0.15cm;
              transition: all 0.15s ease;
              border-bottom: 0.02cm solid #f7fafc;
            }

            .prediction-item:hover {
              background: #f7fafc;
            }

            .prediction-icon {
              color: #718096;
              flex-shrink: 0;
              margin-top: 0.05cm;
            }

            .prediction-content {
              flex: 1;
              display: flex;
              flex-direction: column;
              gap: 0.1cm;
            }

            .prediction-main {
              font-size: 0.42cm;
              font-weight: 600;
              color: #2d3748;
              line-height: 1.3;
            }

            .prediction-secondary {
              font-size: 0.38cm;
              color: #718096;
              line-height: 1.4;
            }

            .location-empty-state {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 1.5cm 2cm;
              text-align: center;
              min-height: 8cm;
            }

            .empty-icon {
              color: #cbd5e0;
              margin-bottom: 0.8cm;
            }

            .empty-text {
              font-size: 0.42cm;
              color: #718096;
              line-height: 1.6;
              max-width: 12cm;
              margin: 0;
            }

            @media (max-width: 1024px) {
              .location-modal-container {
                width: 80vw;
              }

              .location-modal-header {
                padding: 0.55cm 1cm 0.45cm 1cm;
              }

              .location-city-name {
                font-size: 0.6cm;
              }

              .change-city-btn {
                font-size: 0.4cm;
              }

              .location-search-wrapper {
                padding: 0 1cm 0.55cm 1cm;
              }

              .predictions-list {
                padding: 0 1cm 0.55cm 1cm;
              }

              .location-empty-state {
                padding: 1.3cm 1.8cm;
                min-height: 7cm;
              }
            }

            @media (max-width: 768px) {
              .location-modal-container {
                width: 90vw;
                max-height: 80vh;
                border-radius: 0.4cm;
              }

              .location-modal-header {
                padding: 0.5cm 0.8cm 0.4cm 0.8cm;
              }

              .location-header-left {
                gap: 0.35cm;
              }

              .location-city-name {
                font-size: 0.55cm;
              }

              .change-city-btn {
                font-size: 0.38cm;
                padding: 0.12cm 0.25cm;
              }

              .location-close-btn svg {
                width: 22px;
                height: 22px;
              }

              .location-search-wrapper {
                padding: 0 0.8cm 0.5cm 0.8cm;
              }

              .location-search-box {
                margin-bottom: 0.45cm;
              }

              .location-search-input {
                height: 1cm;
                font-size: 0.4cm;
                padding: 0 2.3cm 0 0.4cm;
              }

              .clear-search-btn {
                right: 0.35cm;
              }

              .clear-search-btn svg {
                width: 18px;
                height: 18px;
              }

              .detect-location-btn {
                padding: 0.38cm 0.45cm;
                font-size: 0.4cm;
                gap: 0.28cm;
              }

              .location-icon {
                width: 18px;
                height: 18px;
              }

              .spinner {
                width: 18px;
                height: 18px;
              }

              .predictions-list {
                padding: 0 0.8cm 0.5cm 0.8cm;
              }

              .prediction-item {
                padding: 0.38cm 0.18cm;
                gap: 0.35cm;
              }

              .prediction-icon {
                width: 18px;
                height: 18px;
              }

              .prediction-main {
                font-size: 0.4cm;
              }

              .prediction-secondary {
                font-size: 0.36cm;
              }

              .location-empty-state {
                padding: 1.2cm 1.5cm;
                min-height: 6.5cm;
              }

              .empty-icon {
                width: 70px;
                height: 70px;
                margin-bottom: 0.7cm;
              }

              .empty-text {
                font-size: 0.4cm;
              }

              .spinner-large {
                width: 55px;
                height: 55px;
                margin-bottom: 0.7cm;
              }
            }

            @media (max-width: 480px) {
              .location-modal-container {
                width: 95vw;
                max-height: 75vh;
                border-radius: 0.35cm;
              }

              .location-modal-header {
                padding: 0.45cm 0.65cm 0.35cm 0.65cm;
              }

              .location-header-left {
                gap: 0.3cm;
              }

              .location-city-name {
                font-size: 0.5cm;
              }

              .change-city-btn {
                font-size: 0.36cm;
                padding: 0.1cm 0.22cm;
              }

              .location-close-btn {
                padding: 0.12cm;
              }

              .location-close-btn svg {
                width: 20px;
                height: 20px;
              }

              .location-search-wrapper {
                padding: 0 0.65cm 0.45cm 0.65cm;
              }

              .location-search-box {
                margin-bottom: 0.4cm;
              }

              .location-search-input {
                height: 0.95cm;
                font-size: 0.38cm;
                padding: 0 2.1cm 0 0.38cm;
                border-radius: 0.22cm;
              }

              .clear-search-btn {
                right: 0.32cm;
                padding: 0.12cm;
              }

              .clear-search-btn svg {
                width: 16px;
                height: 16px;
              }

              .detect-location-btn {
                padding: 0.36cm 0.42cm;
                font-size: 0.38cm;
                gap: 0.26cm;
                border-radius: 0.22cm;
              }

              .location-icon {
                width: 16px;
                height: 16px;
              }

              .spinner {
                width: 16px;
                height: 16px;
              }

              .predictions-list {
                padding: 0 0.65cm 0.45cm 0.65cm;
              }

              .prediction-item {
                padding: 0.36cm 0.16cm;
                gap: 0.32cm;
              }

              .prediction-icon {
                width: 16px;
                height: 16px;
              }

              .prediction-content {
                gap: 0.08cm;
              }

              .prediction-main {
                font-size: 0.38cm;
              }

              .prediction-secondary {
                font-size: 0.34cm;
              }

              .location-empty-state {
                padding: 1cm 1.2cm;
                min-height: 6cm;
              }

              .empty-icon {
                width: 60px;
                height: 60px;
                margin-bottom: 0.6cm;
              }

              .empty-text {
                font-size: 0.38cm;
                max-width: 10cm;
              }

              .spinner-large {
                width: 50px;
                height: 50px;
                border-width: 3px;
                margin-bottom: 0.6cm;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
