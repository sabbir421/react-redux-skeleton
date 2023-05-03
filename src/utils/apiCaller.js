import axios from "axios";
import { api, defaultApiVersion } from "../config/config";

const headerContentTypeKey = "Content-Type";
const headerContentTypeValue = "application/json";
axios.defaults.headers.post[headerContentTypeKey] = headerContentTypeValue;
axios.defaults.headers.put[headerContentTypeKey] = headerContentTypeValue;
axios.defaults.headers.patch[headerContentTypeKey] = headerContentTypeValue;
axios.defaults.headers.get[headerContentTypeKey] = headerContentTypeValue;
axios.defaults.headers.delete[headerContentTypeKey] = headerContentTypeValue;

export const privateDelete = (
  endpoint,
  token,
  apiVersion = defaultApiVersion
) => {
  const config = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return axios
    .delete(`${api}/${endpoint}`, config)
    .then((response) => response)
    .catch((error) => errorHandler(error));
};

export const privateGet = async (
  endpoint,
  token,
  apiVersion = defaultApiVersion,
  params = null
) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  if (params) {
    config.params = params;
  }
  return axios
    .get(`${api}/${endpoint}`, config)
    .then((response) => response.data.data)
    .catch((error) => errorHandler(error));
};

export const privatePost = (
  endpoint,
  body,
  token,
  apiVersion = defaultApiVersion
) => {
  return axios
    .post(`${api}/${endpoint}`, JSON.stringify(body), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response)
    .catch((error) => errorHandler(error));
};

const errorHandler = (error) => {
  if (error.response && error.response.status) {
    const status = error.response.status;
    const unauthorized = 401;
    if (status === unauthorized) {
      window.location.href = `seedUrl/?status=401`;
    }
  }
  throw error;
};
