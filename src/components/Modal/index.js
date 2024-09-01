import React, { useCallback } from 'react';
import { View, Modal, Pressable, Text, ScrollView } from 'react-native';
import modalStyles from './modalStyles';

const CustomModal = ({ visible, onClose, title, modalBackgroundStyle, modalContainerStyle, children }) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <Pressable style={[modalStyles.modalBackground, modalBackgroundStyle]} onPress={handleClose}>
        <View style={[modalStyles.modalContainer, modalContainerStyle]}>
          {title && (
            <View style={modalStyles.header}>
              <Text style={modalStyles.headerTitle}>{title}</Text>
            </View>
          )}
          {!title && <View style={modalStyles.handleBar}></View>}
          <ScrollView style={modalStyles.scrollView} contentContainerStyle={modalStyles.scrollViewContent}>
            {children}
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
};

export default React.memo(CustomModal);
