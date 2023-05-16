import { FC, lazy, Suspense } from 'react';

const Component1 = lazy(() => import('../Component1'));
const Notifications = lazy(() => import('../Notifications'));

import { ComponentMapping } from '../../types/ComponentMapping';
import { SidebarPropsType, SidebarConfig } from '../../types/SidebarConfig';

type PropsTypes = SidebarPropsType;
type DynamicComponentConfig = SidebarConfig;

const sidebarComponents: ComponentMapping = {
  component1: Component1,
  notifications: Notifications,
};

const componentMappings: ComponentMapping = {
  ...sidebarComponents,
};

const DynamicComponent = ({ type, props }: DynamicComponentConfig) => {
  if (!!type) {
    const Component: FC<PropsTypes | any> = componentMappings[type];

    return <Suspense>{Component && <Component {...props} />}</Suspense>;
  }

  return <p className='text-center text-danger'>Something went wrong</p>;
};

export default DynamicComponent;
