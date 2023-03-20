import React from 'react';
import classNames from 'classnames';
import { IButtonPropsInterface } from '@/components/button/props';

function Button(
  props: IButtonPropsInterface
): React.ReactElement<IButtonPropsInterface> {
  const {
    name,
    type = 'button',
    variant = 'text',
    color = 'primary',
    className = '',
    onClick,
    ...rest
  } = props;

  const buttonClasses = classNames(className, {
    'btn-primary': variant === 'contained' && color === 'primary',
  });

  return (
    <button
      name={name}
      type={type}
      onClick={onClick}
      className={buttonClasses}
      {...rest}
    >
      test
    </button>
  );
}

export default Button;
