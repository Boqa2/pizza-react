import { X } from "lucide-react";
import { Link } from "react-router-dom";

const PizzaOpenModal = () => {
  return (
    <div className="bg-black z-20 bg-opacity-60 w-full h-screen absolute top-0">
      <div>

      </div>
      <Link to={"/"} className="">
        <X />
      </Link>
    </div>
  );
};

export default PizzaOpenModal;
