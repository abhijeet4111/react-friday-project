import { Typography } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAdminAddRole } from "../Utils.jsx/AdminSlice";

const AddRoleForm = () => {
  const dispatch = useDispatch();
  const [roleName, setRoleName] = useState("");
  const [roleDescreption, setRoleDescreption] = useState("");
  const [roleUserType, setRoleUserType] = useState("");

  let formValues = {
    roleName: roleName,
    descreption: roleDescreption,
    selectVal: roleUserType,
  };
  dispatch(addAdminAddRole(formValues));

  return (
    <div>
      <form>
        <Typography variant="body8">Enter Role Name</Typography>
        <div className="pt-2"></div>

        <input
          type="text"
          className="form-control custom-input"
          placeholder="Custom Role"
          id="roleName"
          name="roleName"
          onChange={(e) => setRoleName(e.target.value)}
          value={roleName}
        />
        <div className="pt-4"></div>
        <Typography variant="body8">Description</Typography>
        <div className="pt-2"></div>
        <textarea
          id="descreption"
          name="descreption"
          onChange={(e) => setRoleDescreption(e.target.value)}
          // onBlur={formik.handleBlur}
          value={roleDescreption}
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
            name="selectVal"
            value={roleUserType}
            onChange={(e) => setRoleUserType(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="User">User</MenuItem>
          </Select>
        </FormControl>
      </form>
    </div>
  );
};
export { AddRoleForm };
