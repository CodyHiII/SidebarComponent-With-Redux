import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DynamicComponent from '../DynamicComponent';
import { MdClose } from 'react-icons/md';
import { closeSidebar } from '../../store/sidebarOverlay/slice';

import { DispatchType } from '../../types/DispatchType';

import { sidebarSelector } from '../../store/sidebarOverlay/selector';

import styles from './styles.module.css';

const SidebarOverlay = () => {
  const dispatch: DispatchType = useDispatch();
  const { isOpen, type, props, title, onClose } = useSelector(sidebarSelector);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleCloseSidebar = () => {
    onClose?.();
    dispatch(closeSidebar());
  };

  return (
    <div
      ref={sidebarRef}
      className={`${styles.sidebar} ${isOpen && styles.sidebarOpen}`}
    >
      <div
        style={{
          padding: title
            ? '30px var(--sidebar-side-padding)'
            : 'var(--sidebar-side-padding)',
        }}
        className={styles.sidebarHeader}
      >
        {title && <h1 className={styles.sidebarTitle}>{title}</h1>}
        <button className={styles.closeButton} onClick={handleCloseSidebar}>
          <MdClose />
        </button>
      </div>
      <div className={styles.childrenContainer}>
        <DynamicComponent type={type} props={props} />
      </div>
    </div>
  );
};

export default SidebarOverlay;
