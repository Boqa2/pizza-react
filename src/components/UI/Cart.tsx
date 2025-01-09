import { X } from "lucide-react";
import { MouseEvent } from "react";
import { useFunction } from "../../libs/useContext";

const Cart = () => {
  const { cart, setCart } = useFunction();
  return (
    <div
      onClick={() => setCart(!cart)}
      className={`sticky  top-0  text-white duration-1000 z-50  ${
        !cart ? "-translate-x-0" : "-translate-y-[1550px]"
      }`}
    >
      <div
        // Обёртка боковой панели с фоном
        className={`fixed top-0 bg-black dark:bg-opacity-90 bg-opacity-60 duration-1000 z-10 w-full h-screen flex justify-end`}
      >
        <div
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          className={`md:w-3/5 w-full p-3 h-full space-y-5 dark:bg-gray-950 bg-slate-200 duration-1000 ${
            !cart ? "translate-y-0" : "-translate-y-[1500px]"
          }`}
        >
          <div className="w-full inline-flex justify-end">
            <button className="dark-text text-orenge" onClick={() => setCart(!cart)}>
              <X />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
