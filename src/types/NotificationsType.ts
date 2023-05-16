export type NotificationType = {
  image: string;
  name: string;
  message: string;
};

export type NotificationsListType = {
  notifications: NotificationType[];
};
