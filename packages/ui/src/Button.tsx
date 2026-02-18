import { ButtonProps } from './Button.types'

export const Button = ({ label }: ButtonProps) => (
  <button style={{padding: '16px', cursor: 'pointer'}}>
    {label}
  </button>
);