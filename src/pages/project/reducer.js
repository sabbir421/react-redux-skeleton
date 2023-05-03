import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ProjectsList: [],
  fetchDataFailed: false,
};

export const ProjectSlice = createSlice({
  name: "ProjectReducer",
  initialState,
  reducers: {
    setProjectsList: (state, action) => {
      state.ProjectsList = action.payload.Projects || [];
    },

    fetchingData: (state) => {
      state.fetchingData = true;
      state.fetchedData = false;
    },
    fetchedData: (state) => {
      state.fetchedData = true;
      state.fetchingData = false;
    },
    fetchDataFailed: (state) => {
      state.fetchDataFailed = true;
      state.fetchingData = false;
      state.fetchedData = false;
    },
    creatingProject: (state) => {
      state.creatingProject = true;
      state.createdProject = false;
      state.createdProjectFailed = false;
    },
    createdProject: (state) => {
      state.creatingProject = false;
      state.createdProject = true;
      state.createdProjectFailed = false;
    },
    createdProjectFailed: (state) => {
      state.creatingProject = false;
      state.createdProject = false;
      state.createdProjectFailed = true;
    },
    resetCreateProject: (state) => {
      state.creatingProject = false;
      state.createdProject = false;
      state.createdProjectFailed = false;
    },

    deletingProject: (state) => {
      state.deletingProject = true;
      state.deletedProject = false;
      state.deletedProjectFailed = false;
    },
    deletedProject: (state) => {
      state.deletedProject = true;
      state.deletingProject = false;
      state.deletedProjectFailed = false;
    },
    deletedProjectFailed: (state) => {
      state.deletedProjectFailed = true;
      state.deletingProject = false;
      state.deletedProject = false;
    },

    resetDeletedProject: (state) => {
      state.deletedProjectFailed = false;
      state.deletingProject = false;
      state.deletedProject = false;
    },
    resetDataFetch: (state) => {
      state.fetchDataFailed = false;
      state.fetchingData = false;
      state.fetchedData = false;
      state.ProjectList = [];
    },
  },
});

const { actions, reducer } = ProjectSlice;

export const {
  setProjectsList,
  fetchingData,
  fetchedData,
  fetchDataFailed,
  resetDataFetch,
  creatingProject,
  createdProject,
  createdProjectFailed,
  createProjectReset,
  resetCreateProject,
  setEditProjectObj,
  setEditProject,
  resetEditProjectObj,
  deletingProject,
  deletedProject,
  deletedProjectFailed,
  resetDeletedProject,
} = actions;

export default reducer;
