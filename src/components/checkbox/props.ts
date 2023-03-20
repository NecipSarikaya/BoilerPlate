import { FormikProps } from 'formik';

export type ICheckboxLabelPositionTypes = 'right' | 'left' | 'top' | 'bottom';

export interface ICheckboxPropsInterface
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  labelClass?: string;
  labelPosition?: ICheckboxLabelPositionTypes;
  containerClass?: string;
  formik?: FormikProps<any>;
}
