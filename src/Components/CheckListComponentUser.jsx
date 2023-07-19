import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
const CheckListComponentUser = ({ propTab }) => {
  const [childCheckboxList, setChildCheckBoxList] = useState(
    propTab.userTabTitle.manageArr
  );

  const childCheckBoxHandler = (e) => {
    const { name, checked } = e.target;

    if (name === "parentCheckBox") {
      let tempUser = childCheckboxList.map((user) => {
        return { ...user, isChecked: checked };
      });
      setChildCheckBoxList(tempUser);
    } else {
      let tempUser = childCheckboxList.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setChildCheckBoxList(tempUser);
    }
  };
  return (
    <div className="py-3">
      <div className="d-flex align-item-center gap-2">
        <input
          className="inputCheckBox"
          name="parentCheckBox"
          type="checkbox"
          onChange={childCheckBoxHandler}
          checked={!childCheckboxList.some((user) => user.isChecked !== true)}
        />
        <Typography variant="body5">Manage</Typography>
      </div>
      {childCheckboxList.map((data) => (
        <div key={data.id} className="d-flex align-item-center gap-2 px-4 my-3">
          <input
            className="inputCheckBox"
            name={data.name}
            checked={data.isChecked || false}
            onChange={childCheckBoxHandler}
            type="checkbox"
          />
          <Typography variant="body5" key={data.id}>
            {data.name}
          </Typography>
        </div>
      ))}
    </div>
  );
};
export { CheckListComponentUser };
