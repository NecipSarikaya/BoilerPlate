import React, { ChangeEvent, FocusEvent } from 'react';
import classNames from 'classnames';
import { IInputPropsInterface } from '@/components/input/props';

function Input(
  props: IInputPropsInterface
): React.ReactElement<IInputPropsInterface> {
  const {
    name = '',
    id,
    label,
    formik,
    onChange = () => undefined,
    onBlur = () => undefined,
    className = '',
    ...rest
  } = props;

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (formik) {
      formik.setFieldValue(name, event.target.value);

      setTimeout(() => {
        formik.validateField(name);
      }, 100);
    }

    onChange(event);
  };

  const blurHandler = (event: FocusEvent<HTMLInputElement>) => {
    if (formik) {
      formik.validateField(name);
    }
    onBlur(event);
  };

  const inputClasses = classNames('border', className, {
    'border-2 border-rose-600': formik?.errors[name],
  });

  return (
    <div className="">
      {label && (
        <label className="block" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={inputClasses}
        onChange={changeHandler}
        onBlur={blurHandler}
        name={name}
        id={id}
        {...rest}
      />
      {formik && formik.errors[name] && (
        <p className="error">{formik.errors[name] as string}</p>
      )}
    </div>
  );
}

export default Input;
