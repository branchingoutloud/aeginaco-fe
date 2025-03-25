import { GenericObjectInterface } from "../commonInterface/commonInterfaces";

export const BASE_URL = "";

export const endPoints = {
  CLIENTS: "api/clients",
  JOB_OPENINGS: "api/jobroles",
  SEND_EMAIL: "api/contactus",
};

export const headersList = {
  Accept: "*/*",
  "Content-Type": "application/json",
};

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint, {
      headers: headersList,
      method: "GET",
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    throw error || "Something went wrong";
  }
};
export const postData = async (endpoint: string, requestOptions:any) => {
  try {
    const response = await fetch(endpoint, requestOptions);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    throw error || "Something went wrong";
  }
};