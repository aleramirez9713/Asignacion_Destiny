import axios from "axios";


export const putPlaces = async (id,body) => {
  try {
    let { data } = await axios.put(
      `http://localhost:5000/tudestino-api/us-central1/updatePlace/${id}`,body
    );
    return data;
  } catch (error) {
    return error.message;
  }
};

