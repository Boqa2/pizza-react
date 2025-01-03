import { Chart } from "../../libs/types/type";

const Button = ({ className, children, onClick }: Chart) => {
  return <button onClick={onClick} className={`but  ${className}`}>{children}</button>;
};

export default Button;
