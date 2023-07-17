import { useState } from "react";
import { mainObj } from "../MainObj";
import { useDispatch } from "react-redux";
import { addAdminPreviewData } from "../Utils.jsx/AdminSlice";
const CheckListComponent = (prop, propTab) => {
  let objToChange = prop.propTab;

  let valuesOfProp = Object.values(prop);
  const [childCheckboxList, setChildCheckBoxList] = useState(
    valuesOfProp[0].manageArr
  );
  const [childCheckboxListSecurity, setChildCheckBoxListSecurity] = useState(
    valuesOfProp[0].securityArr
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
  const childCheckBoxSecurityHandler = (e) => {
    const { name, checked } = e.target;

    if (name === "parentCheckBoxSecurity") {
      let tempUser = childCheckboxListSecurity.map((user) => {
        return { ...user, isChecked: checked };
      });
      setChildCheckBoxListSecurity(tempUser);
    } else {
      let tempUser = childCheckboxListSecurity.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setChildCheckBoxListSecurity(tempUser);
    }
  };
  const filteredArr = childCheckboxList.reduce((acc, curr) => {
    if (curr.hasOwnProperty("isChecked")) {
      acc.push(curr);
    }
    return acc;
  }, []);
  objToChange.arr = filteredArr;
  const dispatch = useDispatch();
  dispatch(addAdminPreviewData(objToChange));

  return (
    <div>
      <div>
        <label>
          <input
            name="parentCheckBox"
            type="checkbox"
            onChange={childCheckBoxHandler}
            checked={!childCheckboxList.some((user) => user.isChecked !== true)}
          />
          Manage
        </label>
      </div>
      {childCheckboxList.map((data) => (
        <div key={data.id} className="px-4">
          <label key={data.id}>
            <input
              name={data.name}
              checked={data.isChecked || false}
              onChange={childCheckBoxHandler}
              type="checkbox"
            />
            {data.name}
          </label>
        </div>
      ))}
      <div>
        <label>
          <input
            name="parentCheckBoxSecurity"
            type="checkbox"
            onChange={childCheckBoxSecurityHandler}
            checked={
              !childCheckboxListSecurity.some((user) => user.isChecked !== true)
            }
          />
          security
        </label>
      </div>
      {childCheckboxListSecurity.map((data) => (
        <div key={data.id} className="px-4">
          <label>
            <input
              name={data.name}
              type="checkbox"
              onChange={childCheckBoxSecurityHandler}
              checked={data.isChecked || false}
            />
            {data.name}
          </label>
        </div>
      ))}
    </div>
  );
};
export { CheckListComponent };
