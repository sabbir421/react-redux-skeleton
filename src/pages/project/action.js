import {
  fetchingData,
  fetchedData,
  fetchDataFailed,
  setProjectsList,
  createdProject,
  creatingProject,
  createdProjectFailed,
  deletingProject,
  deletedProject,
  deletedProjectFailed,
} from "./reducer";

import { privateDelete, privateGet, privatePost } from "../../utils/apiCaller";

export const getProjectsList = (token) => async (dispatch) => {
  dispatch(fetchingData());
  return privateGet("Projects", token)
    .then((response) => {
      dispatch(fetchedData());
      dispatch(setProjectsList(response));
    })
    .catch((error) => {
      dispatch(fetchDataFailed());
    });
};

export const createProject = (body, token) => async (dispatch) => {
  console.log(body, token);
  dispatch(creatingProject());
  return privatePost("projects", body, token)
    .then((response) => {
      dispatch(createdProject());
      dispatch(setProjectsList(response));
    })
    .catch((error) => {
      dispatch(createdProjectFailed());
    });
};

export const deleteProject = (id, token) => async (dispatch) => {
  dispatch(deletingProject());
  return privateDelete(`Project/${id}`, token)
    .then((response) => {
      dispatch(deletedProject());
    })
    .catch((error) => {
      dispatch(deletedProjectFailed());
    });
};
