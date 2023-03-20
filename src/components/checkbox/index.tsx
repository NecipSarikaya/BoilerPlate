import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { ICheckboxPropsInterface } from '@/components/checkbox/props';

function Checkbox(
  props: ICheckboxPropsInterface
): React.ReactElement<ICheckboxPropsInterface> {
  const {
    id,
    name = '',
    formik,
    label,
    labelClass = '',
    containerClass = '',
    labelPosition = 'right',
    onChange = () => undefined,
    className = '',
    ...rest
  } = props;

  const containerClasses = classNames(
    'flex items-center justify-start',
    containerClass,
    {
      'flex-row-reverse': labelPosition === 'right',
      'flex-col': labelPosition === 'top',
      'flex-col-reverse': labelPosition === 'bottom',
      'flex-row': labelPosition === 'left',
    }
  );

  const labelClasses = classNames('font-bold cursor-pointer', labelClass);

  const inputClasses = classNames('border', className);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (formik) {
      formik.setFieldValue(name, event.target.checked);

      setTimeout(() => {
        formik.validateField(name);
      }, 200);
    }
    onChange(event);
  };

  return (
    <div className={containerClasses}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={inputClasses}
        type="checkbox"
        onChange={changeHandler}
        id={id}
        name={name}
        {...rest}
      />
    </div>
  );
}

export default Checkbox;
