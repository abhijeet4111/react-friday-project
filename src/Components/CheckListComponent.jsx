import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { mainObj } from "../MainObj";
import { useDispatch, useSelector } from "react-redux";
import {
  addAdminPreviewData,
  adminCheckedListArr,
  adminObjStored,
  takeArrFromAdmin,
} from "../Utils.jsx/AdminSlice";

const CheckListComponent = ({ propTab }) => {
  const dispatch = useDispatch();

  const roleFormData = useSelector((data) => data.admin.formData);
  const [parentCheckBoxName, setParentCheckBoxName] =
    useState("parentCheckBox");

  const [childCheckboxList, setChildCheckBoxList] = useState(
    propTab.adminTabTitle.manageArr
  );
  dispatch(takeArrFromAdmin(childCheckboxList));
  const dataArr = useSelector((data) => data.admin.defaultArr);

  useEffect(() => {
    let name;
    roleFormData.selectVal === "Admin"
      ? (name = "parentCheckBox")
      : (name = "");
    if (name === "parentCheckBox") {
      let tempUser = childCheckboxList.map((user) => {
        return { ...user, isChecked: true };
      });
      setChildCheckBoxList(tempUser);
    } else {
      let tempUser = childCheckboxList.map((user) =>
        user.name === name ? { ...user, isChecked: false } : user
      );
      setChildCheckBoxList(tempUser);
    }
  }, []);

  // const [childCheckboxListSecurity, setChildCheckBoxListSecurity] = useState(
  //   valuesOfProp[0].securityArr
  // );

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
  console.log(childCheckboxList);

  // const newFilteredArray = mainObj.map((obj) => {
  //   return {
  //     verticalObj: {
  //       ...obj.verticalObj,
  //       adminTabTitle: {
  //         ...obj.verticalObj.adminTabTitle,
  //         manageArr: obj.verticalObj.adminTabTitle.manageArr.filter(
  //           (item) => item.isChecked === true
  //         ),
  //       },
  //     },
  //   };
  // });

  // console.log(newFilteredArray);

  // const childCheckBoxSecurityHandler = (e) => {
  //   const { name, checked } = e.target;

  //   if (name === "parentCheckBoxSecurity") {
  //     let tempUser = childCheckboxListSecurity.map((user) => {
  //       return { ...user, isChecked: checked };
  //     });
  //     setChildCheckBoxListSecurity(tempUser);
  //   } else {
  //     let tempUser = childCheckboxListSecurity.map((user) =>
  //       user.name === name ? { ...user, isChecked: checked } : user
  //     );
  //     setChildCheckBoxListSecurity(tempUser);
  //   }
  // };
  const filteredArr = dataArr.reduce((acc, curr) => {
    if (curr.isChecked === true) {
      acc.push(curr);
    }
    return acc;
  }, []);

  dispatch(addAdminPreviewData(filteredArr));

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
      {dataArr.map((data) => (
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
      {/* <div className="d-flex align-item-center gap-2 ">
        <input
          className="inputCheckBox"
          name="parentCheckBoxSecurity"
          type="checkbox"
          onChange={childCheckBoxSecurityHandler}
          // checked={
          //   !childCheckboxListSecurity.some((user) => user.isChecked !== true)
          // }
        />
        <Typography variant="body5">security</Typography>
      </div>
      {childCheckboxListSecurity.map((data) => (
        <div key={data.id} className="d-flex align-item-center gap-2 px-4 my-3">
          <input
            className="inputCheckBox"
            name={data.name}
            type="checkbox"
            onChange={childCheckBoxSecurityHandler}
            checked={data.isChecked || false}
          />
          <Typography variant="body5">{data.name}</Typography>
        </div>
      ))} */}
    </div>
  );
};
export { CheckListComponent };
