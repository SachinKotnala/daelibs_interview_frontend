import fetchList from "../fakeApi/fetchList";
import { useQuery } from "react-query";

const useFetchUserList = () => {
  try {
    return useQuery(["users-list"], async () => {
      return await fetchList();
    });
  } catch (error) {
    // Handle the error
    console.error("Error fetching users list:", error);
    throw error; // Optionally rethrow the error
  }
};

export default useFetchUserList;
