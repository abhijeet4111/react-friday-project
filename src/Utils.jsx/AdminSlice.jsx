import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
  name: "admin",
  initialState: {},
  reducers: {
    addAdminPreviewData: (state, action) => {
      return { ...state, ...action.payload };
    },
    addAdminAddRole: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { addAdminPreviewData, addAdminAddRole } = AdminSlice.actions;
export default AdminSlice.reducer;
