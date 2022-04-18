import React from 'react';
import {Dialog, Portal, Paragraph, Button} from 'react-native-paper';

const DialogNoti = ({title, content, visible, setVisible}) => {
  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={() => {
          setVisible(false);
        }}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{content}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={() => {
              setVisible(false);
            }}>
            Ok
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogNoti;
