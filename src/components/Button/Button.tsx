import { FC } from 'react';
import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './Button.styles';

interface ButtonProps {
  fontStyle?: StyleProp<TextStyle>;
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  testID?: string;
}

const Button: FC<ButtonProps> = ({ label, onPress, fontStyle, testID }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} testID={testID}>
      <Text style={fontStyle || styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
