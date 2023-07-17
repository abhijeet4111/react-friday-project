import { Typography } from "@mui/material";

import { AddRoleForm } from "./AddRoleForm";
const AddRoleName = () => {
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

      <AddRoleForm />
    </div>
  );
};
export { AddRoleName };
