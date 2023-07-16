import { Grid, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
const AddRoleName = () => {
  const [userType, setUserType] = useState("");

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div>
      <Typography variant="body7">Add Role Name</Typography>
      <div className="pt-2"></div>
      <Typography variant="body5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Typography>
      <div className="pt-4"></div>
      <form>
        <Typography variant="body8">Enter Role Name</Typography>
        <div className="pt-2"></div>

        <input
          type="text"
          className="form-control custom-input"
          placeholder="Custom Role"
        />
        <div className="pt-4"></div>
        <Typography variant="body8">Description</Typography>
        <div className="pt-2"></div>
        <textarea className=" form-control custom-textArea"></textarea>
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
      </form>
    </div>
  );
};
export { AddRoleName };
