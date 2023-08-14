import axios from "axios";

const fetchLocations = (currentDimensions) => {
  const url = "https://rickandmortyapi.com/api/location/";
  let searchArray = [];
  let searchableData = {};
  const dimensions = [...Array(currentDimensions).keys()].map((i) => i + 1);
  let searchString = url + dimensions.toString();
  console.log(searchString);

  axios
    .get(searchString)
    .then(({ data }) => {
      for (let index = 0; index < data.length; index++) {
        searchableData.value = data[index]?.id;
        searchableData.label =
          data[index]?.id.toString() +
          ". " +
          data[index]?.name +
          " " +
          data[index]?.dimension;
        searchArray.push(searchableData);
        searchableData = {};
      }
    })
    .catch((error) => console.log(error));

  return searchArray;
};
export default fetchLocations;
