import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState';
import { SidebarConfig } from '../../types/SidebarConfig';

export const closeSidebar = createAsyncThunk<string, void>(
  'sidebarOverlay/fetchData',
  async () => {
    return new Promise<string>((resolve) => {
      const delay = getComputedStyle(document.documentElement).getPropertyValue(
        '--sidebar-transition-time'
      );
      setTimeout(() => {
        resolve('');
      }, parseFloat(delay));
    });
  }
);

const sidebarOverlaySlice = createSlice({
  name: 'sidebarOverlay',
  initialState,
  reducers: {
    openSidebar: (
      state: SidebarConfig,
      action: PayloadAction<SidebarConfig>
    ) => {
      state.isOpen = true;
      state.type = action.payload.type;
      state.props = action.payload.props;
      state.sidebarTitle = action.payload.sidebarTitle;
      state.onClose = action.payload.onClose;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(closeSidebar.pending, (state) => {
        state.isOpen = false;
      })
      .addCase(closeSidebar.fulfilled, (state) => {
        state.type = null;
        state.props = undefined;
        state.sidebarTitle = '';
        state.onClose = () => {};
      });
  },
});
export const { openSidebar } = sidebarOverlaySlice.actions;
export default sidebarOverlaySlice.reducer;
