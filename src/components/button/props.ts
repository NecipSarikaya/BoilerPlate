import { FormikProps } from 'formik';

export type ButtonVariantTypes = 'contained' | 'outlined' | 'text';

export type ButtonColorTypes =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'success'
  | 'white';

export interface IButtonPropsInterface
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariantTypes;
  color?: ButtonColorTypes;
}
