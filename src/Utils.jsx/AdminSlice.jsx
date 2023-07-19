import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "admin",
  initialState: {},
  reducers: {
    addAdminPreviewData: (state, action) => {
      state.arr = action.payload;
    },
    addAdminAddRole: (state, action) => {
      state.formData = action.payload;
    },
    adminCheckedListArr: (state, action) => {
      state.checkedAdminArr = action.payload;
    },
    takeArrFromAdmin: (state, action) => {
      state.defaultArr = action.payload;
    },
  },
});
export const {
  adminObjStored,
  adminCheckedListArr,
  addAdminPreviewData,
  addAdminAddRole,
  takeArrFromAdmin,
} = AdminSlice.actions;
export default AdminSlice.reducer;
