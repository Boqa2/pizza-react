import { ChevronDown, X } from "lucide-react";
import { useFunction } from "../../libs/useContext";
import { FormEvent } from "react";
import Items from "./Items";

const PizzaOpenModal = () => {
  const {setModal}=useFunction()
  return (
    <div
      onClick={() => setModal(false)}
      className=" fixed flex items-center font-nunito justify-center  top-0 bottom-0 z-50 w-full h-screen bg-black bg-opacity-55 place-items-center py-0 lg:py-5 "
    >
      <div
        onClick={(e: FormEvent<HTMLDivElement>) => e.stopPropagation()}
        className="lg:w-3/4 relative gap-5 lg:p-6 p-1 w-full  h-full rounded-2xl bg-white"
      >
        <div className="block md:hidden">
          <button
            onClick={() => setModal(false)}
            className="but fixed bg-white border-none shadow-2xl shadow-indigo-600 top-0 rounded-full h-12 p-0 w-12"
          >
            <ChevronDown size={16} />
          </button>
        </div>
        <Items />
      </div>
      <div className="md:block text-white hidden h-full">
        <X />
      </div>
    </div>
  );
};

export default PizzaOpenModal;
