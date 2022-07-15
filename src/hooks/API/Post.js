import axios from "axios";


export const postPlaces = async (body) => {
  try {
    let { data } = await axios.post(
      `http://localhost:5000/tudestino-api/us-central1/addPlace`,body
    );
    return data;
  } catch (error) {
    return error.message;
  }
};
