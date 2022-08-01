import colorSchemeReducer from "@data/redux/colorScheme";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    colorScheme: colorSchemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
