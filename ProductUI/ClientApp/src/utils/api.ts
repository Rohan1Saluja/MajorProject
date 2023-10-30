import dataApi from "./dataApiConfig";

// Example function to make a GET request
export const getData = async (endpoint: string) => {
  try {
    const response = await dataApi.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Example function to make a POST request
export const postData = async (endpoint: string, data: any) => {
  try {
    const response = await dataApi.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};
