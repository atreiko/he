'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { useFormStatus } from 'react-dom';
import cn from 'classnames';

import { Icon } from '../icon/Icon';
import { IconType } from '../icon/IconType';

import './button.css';

// ButtonHTMLAttributes, DetailedHTMLProps push attr "type" to ...rest
// type ButtonType = 'button' | 'submit' | 'reset';
type ButtonVariant = 'clean' | 'primary' | 'secondary';

interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  isValid?: boolean;
  isDisabled?: boolean;
  variant?: ButtonVariant;
  typeIcon?: string | null;
  onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<IButtonProps> = ({  
  children,
  className,
  isDisabled = false,
  variant = 'primary',
  typeIcon,
  onClick,
  isValid = true,
}) => {
  const { pending } = useFormStatus()
  return (
    <button
      // type='button'
      disabled={!isValid}
      className={cn(
        'button-clean',
        variant === 'primary' ? 'button-primary' : 'button-clean',
        variant === 'secondary' ? 'button-secondary' : 'button-clean'
      )}
      onClick={onClick}>
      {pending ? 'loading...' : children}
      {typeIcon && <Icon type={typeIcon as IconType} />}
    </button>
  );
};

export default Button;
