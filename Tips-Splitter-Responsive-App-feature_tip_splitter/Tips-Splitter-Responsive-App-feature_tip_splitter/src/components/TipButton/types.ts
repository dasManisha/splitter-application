import { CSSProperties } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {
  children: React.ReactNode;
  containerStyle?: CSSProperties;
  tip: string;
  value: string;
  handleTipSelected: (value: string) => void;
}
