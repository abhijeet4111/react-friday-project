import { Typography } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addAdminAddRole } from "../Utils.jsx/AdminSlice";

const AddRoleForm = () => {
  const [userType, setUserType] = useState("");
  const [formValues, setFormValues] = useState({
    roleName: "Add role name",
    descreption: "Enter Descreption",
  });
  const formik = useFormik({
    initialValues: {
      roleName: "",
      descreption: "",
    },
    onSubmit: (values) => {
      setFormValues(values);
    },
  });

  const handleChange = (event) => {
    setUserType(event.target.value);
  };
  const dispatch = useDispatch();
  dispatch(addAdminAddRole(formValues));
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="body8">Enter Role Name</Typography>
        <div className="pt-2"></div>

        <input
          type="text"
          className="form-control custom-input"
          placeholder="Custom Role"
          id="roleName"
          name="roleName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.roleName}
        />
        <div className="pt-4"></div>
        <Typography variant="body8">Description</Typography>
        <div className="pt-2"></div>
        <textarea
          id="descreption"
          name="descreption"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.descreption}
          className=" form-control custom-textArea"
        ></textarea>
        <div className="pt-4"></div>
        <Typography variant="body8">Inherit Capabilities from</Typography>
        <div className="pt-2"></div>
        <FormControl
          className="custom-input form-control"
          sx={{ m: 1, minWidth: 120 }}
        >
          <Select
            value={userType}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="user">User</MenuItem>
          </Select>
        </FormControl>
        <button className="btn btn-primary mx-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export { AddRoleForm };
