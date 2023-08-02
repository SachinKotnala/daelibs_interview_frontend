import axios from "axios";

const fetchList = async () => {
  try {
    const response = await axios.get(`http://localhost:3030/results`);

    return response.data;
  } catch (error) {
    // Handle the error here or throw a new error
    throw new Error(`Failed to fetch list: ${error.message}`);
  }
};

export default fetchList;
