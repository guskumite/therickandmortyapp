import fetchLocations from "./fetchLocations.js";
import { react } from "react";
import Select from "react-select";

const LocationForm = ({ handleSubmit, knownDimensions }) => {
  // call to fetchLocations to implement react-select module that receives the array locations
  // to show possible selectable values to the user

  let locations = [];

  locations = fetchLocations(knownDimensions);
  console.log(locations);

  return (
    <form
      className="flex items-stretch justify-center md:items-center ml-32 border-2 border-[#355E33] h-[9vh] w-[62vw]"
      onSubmit={handleSubmit}
    >
      <Select
        className="text-black bg-[#355E33] h-[3vh] w-[45vw] mb-4"
        options={locations}
        name={"newLocation"}
      />
      {/* <input
        className="text-black bg-[#355E33] h-[5vh] mt-1 mb-2"
        placeholder="Type a location ..."
        type="text"
        id="newLocation"
  ></input> */}
      <button className="ml-4 mr-4 bg-[#355E33] h-[5vh] text-black squared-full w-[10vw] mt-1 mb-2">
        Search
      </button>
    </form>
  );
};

export default LocationForm;
