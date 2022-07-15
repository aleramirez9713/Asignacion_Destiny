import axios from "axios";



export const deletePlace = async (id) => {
    try {
      let { data } = await axios.delete(
        `http://localhost:5000/tudestino-api/us-central1/deletePlace/${id}`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  };
  
