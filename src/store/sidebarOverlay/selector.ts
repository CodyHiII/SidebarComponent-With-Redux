import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../createStore';

const isSidebarOpen = (state: RootState) => state.sidebarOverlay.isOpen;
const sidebarType = (state: RootState) => state.sidebarOverlay.type;
const sidebarProps = (state: RootState) => state.sidebarOverlay.props;
const sidebarTitle = (state: RootState) => state.sidebarOverlay.sidebarTitle;
const onClose = (state: RootState) => state.sidebarOverlay.onClose;

export const sidebarSelector = createSelector(
  isSidebarOpen,
  sidebarType,
  sidebarProps,
  sidebarTitle,
  onClose,
  (isOpen, type, props, title, onClose) => ({
    isOpen,
    type,
    props,
    title,
    onClose,
  })
);
