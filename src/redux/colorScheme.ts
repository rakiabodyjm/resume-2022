import { RootState } from "src/redux/store";
import {
  createDraftSafeSelector,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

export type DarkOrLight = "light" | "dark";

// if (
//   window &&
//   window?.matchMedia &&
//   window?.matchMedia("(prefers-color-scheme: dark)").matches
// ) {
//   initialState = "dark";
// }

const colorSchemeReducer = createSlice({
  name: "colorScheme",
  initialState: "light" as DarkOrLight,
  reducers: {
    setColorScheme(
      _,
      action: {
        payload: DarkOrLight;
      }
    ) {
      return action.payload;
    },
  },
});

export const colorSchemeSelector = createDraftSafeSelector(
  (state: RootState) => state,
  (state) => state.colorScheme
);
export const { setColorScheme } = colorSchemeReducer.actions;
export default colorSchemeReducer.reducer;
