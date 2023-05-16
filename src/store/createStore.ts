import { configureStore } from '@reduxjs/toolkit';
import sidebarOverlaySlice from './sidebarOverlay/slice';

export const store = configureStore({
  reducer: {
    sidebarOverlay: sidebarOverlaySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
