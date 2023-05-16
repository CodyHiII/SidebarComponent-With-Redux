import { useDispatch } from 'react-redux';
import { openSidebar } from '../../store/sidebarOverlay/slice';

import styles from './styles.module.css';

const notifications = [
  {
    image: 'https://source.unsplash.com/random/?portrait/1',
    name: 'John Doe',
    message: "Hey, what's up?",
  },
  {
    image: 'https://source.unsplash.com/random/?portrait/2',
    name: 'Jane Smith',
    message: 'Are you free for a chat?',
  },
  {
    image: 'https://source.unsplash.com/random/?portrait/3',
    name: 'David Johnson',
    message: 'Could you help me with something?',
  },
  {
    image: 'https://source.unsplash.com/random/?portrait/4',
    name: 'Emily Williams',
    message: "Let's catch up sometime!",
  },
  {
    image: 'https://source.unsplash.com/random/?portrait/5',
    name: 'Michael Brown',
    message: 'Got a minute to talk?',
  },
  {
    image: 'https://source.unsplash.com/random/?portrait/6',
    name: 'Sarah Thompson',
    message: 'Do you have any plans for the weekend?',
  },
  {
    image: 'https://source.unsplash.com/random/?portrait/7',
    name: 'Robert Davis',
    message: 'I need your opinion on something important.',
  },
  {
    image: 'https://source.unsplash.com/random/?portrait/8',
    name: 'Olivia Wilson',
    message: 'Let me know when you are available.',
  },
  {
    image: 'https://source.unsplash.com/random/?portrait/9',
    name: 'Daniel Martinez',
    message: 'I have a question about the project.',
  },
  {
    image: 'https://source.unsplash.com/random/?portrait/10',
    name: 'Sophia Anderson',
    message: 'Just wanted to say hello!',
  },
];

const Display = () => {
  const dispatch = useDispatch();

  const openNotificationsSidebar = () => {
    dispatch(
      openSidebar({
        type: 'notifications',
        sidebarTitle: 'Notifications',
        props: { notifications: notifications },
        onClose: () => console.log('do stuff after sidebar closes'),
      })
    );
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={openNotificationsSidebar}>
        Notifications
      </button>
    </div>
  );
};

export default Display;
