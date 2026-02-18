import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from './Button.types'

export const Button = ({ label }: ButtonProps) => (
  <TouchableOpacity>
    <Text>{label}</Text>
  </TouchableOpacity>
);