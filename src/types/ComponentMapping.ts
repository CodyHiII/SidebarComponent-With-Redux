import { SidebarPropsType } from './SidebarConfig';

export interface ComponentMapping {
  [componentName: string]: React.FC<SidebarPropsType | any>;
}
