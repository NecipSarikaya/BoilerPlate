import { FormikProps } from 'formik';

export interface ITextareaPropsInterface
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string;
  formik?: FormikProps<any>;
}
