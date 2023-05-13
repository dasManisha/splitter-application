// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {
  label: string;
  handleTipSelect: (value: string) => void;
  handleCustomTip: (value: string) => void;
  customTip: string;
  tip: string;
}
