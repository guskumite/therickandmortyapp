import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./utils/random";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import axios from "axios";

function App() {
  //KNOWN_DIMENSIONS is a magic number
  const KNOWN_DIMENSIONS = 126;
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentDimensions, setCurrentDimensions] = useState(KNOWN_DIMENSIONS);

  //These anonymous functions are going to be passed by reference to the ResidentForm component to manage
  // the values received in the input for searching a specific dimension

  const fetchDimension = (locationId) => {
    const url = `https://rickandmortyapi.com/api/location/${locationId}`;
    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;
    fetchDimension(newLocation);
  };

  useEffect(() => {
    const url2 = "https://rickandmortyapi.com/api/location";
    axios
      .get(url2)
      .then(({ data2 }) => {
        setCurrentDimensions(data2?.info.count);
        const randomDimension = getRandomDimension(currentDimensions);
        fetchDimension(randomDimension);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="backimg bg-black min-h-screen text-white">
      <div className="h-[26vh]"></div>
      <LocationForm
        handleSubmit={handleSubmit}
        knownDimensions={KNOWN_DIMENSIONS}
      />
      <LocationInfo currentLocation={currentLocation} />
      <ResidentList
        residents={currentLocation?.residents ?? []}
        currentLocation={currentLocation}
      />
    </main>
  );
}

export default App;
