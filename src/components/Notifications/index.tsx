import { SiGooglemessages } from 'react-icons/si';

import { NotificationsListType } from '../../types/NotificationsType';

import styles from './styles.module.css';

const Notifications = ({ notifications }: NotificationsListType) => {
  return (
    <div className={styles.notificationsContainer}>
      {notifications.map((item, index) => (
        <div key={index} className={styles.notification}>
          <div className={styles.notificationsHeader}>
            <SiGooglemessages className={styles.icon} />
            <h4>Messages</h4>
          </div>
          <div className={styles.notificationsBody}>
            <div className={styles.profileImage}>
              <img src={item.image} alt={`${item.name} profile image`} />
            </div>
            <div className={styles.info}>
              <h1>{item.name}</h1>
              <p>{item.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
