// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProps {
  tip: string;
  bill: string;
  people: string;
  handleInputBill: (value: string) => void;
  handleInputPeople: (value: string) => void;
  handleTipSelect: (value: string) => void;
  handleCustomTip: (value: string) => void;
  customTip: string;
  errorBill: string | null;
  errorPeople: string | null;
}
