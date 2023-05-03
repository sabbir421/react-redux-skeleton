import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "./action";

function CreateProject() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDkxNWNjMDAwODMwODY3YzhlNTIwZCIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJzdGF0dXMiOiJBQ1RJVkUiLCJpYXQiOjE2ODMwMjUzMDYsImV4cCI6MTY4MzA1NDEwNn0.A_xDBenOOtsLDaf29ODM0jWp22dl_PD9HrB_UjxF2sw";

  const status = [
    { value: "ACTIVE", label: "Active" },
    { value: "INACTIVE", label: "Inactive" },
  ];
  const initialValue = {
    projectName: "",
    status: "ACTIVE",
  };
  const [formData, setFormData] = useState(initialValue);
  const dispatch = useDispatch();
  const setProjectData = (name, value) => {
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const handleFormSubmit = () => {
    dispatch(createProject(formData, token));
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      style={{ marginLeft: "35%" }}
      noValidate
      autoComplete="off"
    >
      <label className="fieldName">PROJECT NAME</label> <br />
      <TextField
        style={{ width: "50%", margin: 0 }}
        placeholder="Enter Project name"
        required
        //className=" flex"
        type="text"
        onChange={(e) => setProjectData("projectName", e.target.value)}
      />
      <br />
      <label className="fieldName">SELECT STATUS</label> <br />
      <Select
        style={{ width: "50%" }}
        // className=" flex fieldValue"
        defaultValue="ACTIVE"
        type="text"
        onChange={(e) => setProjectData("status", e.target.value)}
      >
        {status.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      <br />
      <Button
        variant="contained"
        style={{ marginTop: 10 }}
        className="addBtn"
        onClick={handleFormSubmit}
      >
        Create
      </Button>
    </Box>
  );
}

export default CreateProject;
