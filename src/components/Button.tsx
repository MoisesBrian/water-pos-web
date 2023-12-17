import { ReactNode } from "react";

interface Props {
  child: ReactNode;
  color: string;
  onPressed: () => void;
}
const Button = ({ child, color, onPressed }: Props) => {
  return (
    <button type="button" className={"btn btn-"+color} onClick={onPressed}>
      {child}
    </button>
  );
};

export default Button;
