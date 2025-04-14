// components/StarRatingModal.tsx
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (rating: number) => void;
};

export default function StarRatingModal({ visible, onClose, onSubmit }: Props) {
  const [rating, setRating] = useState(0);

  const handleRating = (value: number) => setRating(value);

  const handleSubmit = () => {
    onSubmit(rating);
    onClose();
    setRating(0);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Rate Your Experience</Text>
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                <FontAwesome
                  name={star <= rating ? 'star' : 'star-o'}
                  size={40}
                  color="#FFD700"
                  style={styles.star}
                />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  starsContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  star: {
    marginHorizontal: 5,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  cancelButton: {
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  cancelText: {
    color: '#333',
    fontWeight: '600',
  },
  submitButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
  },
  submitText: {
    color: 'white',
    fontWeight: '600',
  },
});
