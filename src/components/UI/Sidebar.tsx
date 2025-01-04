import { ShoppingCart, User, X } from "lucide-react";
import { MouseEvent } from "react";
import { Switch } from "../shared/Switch";
import Button from "../shared/Button";

const Sidebar = ({
  efects,
  setEfects,
}: {
  efects: boolean;
  setEfects: () => void;
}) => {
  return (
    <div
      onClick={setEfects}
      className={`relative text-white z-10 duration-700 ${
        efects ? "" : "scale-0"
      }`}
    >
      <div
        // Обёртка боковой панели с фоном
        className={`absolute bg-black dark:bg-opacity-90 bg-opacity-60 duration-500 z-10 w-full h-screen flex justify-end  ${
          efects ? "scale-x-100" : "scale-0"
        }`}
      >
        <div
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          className={`w-3/5 p-3 h-full space-y-5 dark:bg-indigo-200 bg-orange-200 duration-1000 ${
            efects ? "translate-x-0" : "-translate-y-[1500px]"
          }`}
        >
          <div className="w-full inline-flex justify-end">
            <button onClick={setEfects}>
              <X />
            </button>
          </div>
          <div className="flex justify-between">
            <div className="leading-3 gap-3 inline-flex ">
              <img className="w-11 h-4/6" src="img/logo.png" alt="" />
              <div className=" inline-flex flex-col">
                <h1 className="md:text-2xl text-sm font-nunito uppercase font-black">
                  React<br/> Pizza
                </h1>
                <p className="text-[10px] hidden md:block md:text-sm text-gray-400 leading-3 ">
                  вкусней не куда
                </p>
              </div>
            </div>
            <Switch />
          </div>
          <div className="inline-flex gap-3  w-full flex-col">
          <Button className="font-nunito gap-1">
            <User size={20} />
            Войти
          </Button>
          <Button className="">
            <ShoppingCart size={20} />
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
