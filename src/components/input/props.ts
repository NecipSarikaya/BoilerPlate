import { FormikProps } from 'formik';

export interface IInputPropsInterface
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  formik?: FormikProps<any>;
}
