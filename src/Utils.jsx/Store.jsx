import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./TabSlice";
import adminReducer from "./AdminSlice";
const store = configureStore({
  reducer: {
    tabs: tabReducer,
    admin: adminReducer,
  },
});
export { store };
