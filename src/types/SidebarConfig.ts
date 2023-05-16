import { Component1Type } from './Component1Type';
import { NotificationsListType } from './NotificationsType';

export type SidebarPropsType = Component1Type | NotificationsListType;
export type SidebarType = 'component1' | 'notifications' | null;

export type SidebarConfig = {
  isOpen?: boolean;
  type?: SidebarType;
  props?: SidebarPropsType;
  sidebarTitle?: string;
  onClose?: () => void;
};
