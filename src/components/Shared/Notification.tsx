import React from 'react';
import { ToastNotification } from 'carbon-components-react';
import { Grid } from '@carbon/react';

interface NotificationProps {
  message: string;
  onClose: () => boolean;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <Grid fullWidth className="test">
      <ToastNotification
        kind="success"
        subtitle={<span>{message}</span>}
        title="Notification"
        caption=""
        timeout={3000}
        className="test2"
        onClose={onClose}
      />
    </Grid>
  );
};

export default Notification;
