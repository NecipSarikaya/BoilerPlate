import React, { ChangeEvent, FocusEvent } from 'react';
import classNames from 'classnames';
import { ITextareaPropsInterface } from '@/components/textarea/props';

function TextArea(
  props: ITextareaPropsInterface
): React.ReactElement<ITextareaPropsInterface> {
  const {
    id,
    name = '',
    onChange = () => undefined,
    onBlur = () => undefined,
    className = '',
    formik,
    label,
    cols = 5,
    rows = 5,
    ...rest
  } = props;

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (formik) {
      formik.setFieldValue(name, event.target.value);

      setTimeout(() => {
        formik.validateField(name);
      }, 200);
    }
    onChange(event);
  };

  const blurHandler = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (formik) {
      formik.validateField(name);
    }
    onBlur(event);
  };

  const textAreaClasses = classNames('border w-full', className);

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        rows={rows}
        cols={cols}
        id={id}
        name={name}
        onChange={changeHandler}
        onBlur={blurHandler}
        className={textAreaClasses}
        {...rest}
      />
    </div>
  );
}
export default TextArea;
