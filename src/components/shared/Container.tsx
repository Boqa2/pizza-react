import { Chart } from "../../libs/types/type";

const Container = ({ children, className, onClick }: Chart) => {
  return <div onClick={onClick} className={`container mx-auto px- ${className}`}>{children}</div>;
};

export default Container;
