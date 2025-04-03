import React, { useState, useEffect } from "react";
import "../Css/NearbyMuseums.css";

export default function NearbyMuseums() {
  const [location, setLocation] = useState(null);
  const [museums, setMuseums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchRadius, setSearchRadius] = useState(5);
  const [error, setError] = useState(null);

  // Mock data for museums (in a real app, this would come from an API)
  const mockMuseums = [
    {
      id: 1,
      name: "Natural History Museum",
      address: "1234 Science Ave, City",
      distance: 1.2,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1575223970966-76ae61ee7838?q=80&w=2069&auto=format&fit=crop",
      description:
        "Exhibits on natural history, dinosaurs, and earth sciences.",
    },
    {
      id: 2,
      name: "Modern Art Gallery",
      address: "567 Art Blvd, City",
      distance: 2.5,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1567722681579-c671cabd2810?q=80&w=2070&auto=format&fit=crop",
      description:
        "Contemporary art from around the world with rotating exhibits.",
    },
    {
      id: 3,
      name: "Science Museum",
      address: "890 Tech Way, City",
      distance: 3.1,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1630278156268-52b8ecf9684f?q=80&w=2070&auto=format&fit=crop",
      description:
        "Interactive exhibits exploring technology, physics, and innovation.",
    },
    {
      id: 4,
      name: "Local History Museum",
      address: "321 Heritage St, City",
      distance: 4.3,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=2069&auto=format&fit=crop",
      description:
        "Exhibits documenting the local history and cultural heritage.",
    },
  ];

  // Get user's current location
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(
            "Unable to retrieve your location. Please enable location services."
          );
        }
      );
    } else {
      setError("Geolocation is not supported by your browser");
    }
  }, []);

  // Simulate fetching museums based on location and radius
  useEffect(() => {
    if (location) {
      setLoading(true);
      // Simulating API call delay
      setTimeout(() => {
        // Filter museums based on radius (mock logic)
        const filteredMuseums = mockMuseums.filter(
          (museum) => museum.distance <= searchRadius
        );
        setMuseums(filteredMuseums);
        setLoading(false);
      }, 1000);
    }
  }, [location, searchRadius]);

  const handleRadiusChange = (e) => {
    setSearchRadius(Number(e.target.value));
  };

  return (
    <div className="nearby-museums-container">
      <div className="museums-header">
        <h2>Discover Nearby Museums</h2>
        <p>Find museums and galleries in your area</p>
      </div>

      <div className="search-controls">
        <div className="search-radius">
          <label htmlFor="radius">Search Radius: {searchRadius} km</label>
          <input
            type="range"
            id="radius"
            min="1"
            max="50"
            value={searchRadius}
            onChange={handleRadiusChange}
            className="radius-slider"
          />
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Finding museums near you...</p>
        </div>
      ) : (
        <div className="museums-grid">
          {museums.length > 0 ? (
            museums.map((museum) => (
              <div className="museum-card" key={museum.id}>
                <div className="museum-image">
                  <img src={museum.image} alt={museum.name} />
                </div>
                <div className="museum-details">
                  <h3>{museum.name}</h3>
                  <div className="museum-rating">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < Math.floor(museum.rating) ? "star filled" : "star"
                        }
                      >
                        ★
                      </span>
                    ))}
                    <span className="rating-value">{museum.rating}</span>
                  </div>
                  <p className="museum-distance">{museum.distance} km away</p>
                  <p className="museum-address">{museum.address}</p>
                  <p className="museum-description">{museum.description}</p>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-museums">
              <p>
                No museums found within {searchRadius} km. Try increasing your
                search radius.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
