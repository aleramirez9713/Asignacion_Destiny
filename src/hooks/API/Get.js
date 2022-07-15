import axios from "axios";


export const getPlaces = async () => {
  try {
    let { data } = await axios.get(
      `http://localhost:5000/tudestino-api/us-central1/getPlaces/`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};



export const getPlacesById = async (param) => {
    try {
      let { data } = await axios.get(
        `http://localhost:5000/tudestino-api/us-central1/getPlaceWithID/${param}`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  };
  


  