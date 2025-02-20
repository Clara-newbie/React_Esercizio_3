import { useState } from "react";

export default function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function getLocation() {
    setLoading(true);
    setError(null);

    // il controllo serve xkè non tutti i browser supportano questa API
    if (!navigator.geolocation) {
      setError("La geolocalizzazione non è supportata dal tuo browser.");
      setLoading(false);
      return;
    }
    // è una funzione asincrona
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },

      // l'oggetto error passato alla 2° callback contiene un message
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );
  }

  return {
    location,
    getLocation,
    error,
    loading,
  };
}
