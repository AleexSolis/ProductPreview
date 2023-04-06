import { FC } from 'react';
import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './Button.styles';

interface ButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  fontStyle?: StyleProp<TextStyle>;
}

const Button: FC<ButtonProps> = ({ label, onPress, fontStyle }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={fontStyle || styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
