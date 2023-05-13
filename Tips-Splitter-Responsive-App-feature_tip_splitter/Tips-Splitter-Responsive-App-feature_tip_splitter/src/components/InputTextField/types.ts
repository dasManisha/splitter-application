import { CSSProperties } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {
  textStyle?: CSSProperties;
  containerStyle: CSSProperties;
  error?: string | null;
  label: string;
  text?: string;
  image: string;
  bill: string;
  handleInputBill: (value: string) => void;
}
