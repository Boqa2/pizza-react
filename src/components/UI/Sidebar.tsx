import { X } from "lucide-react";
import {  MouseEvent } from "react";

const Sidebar = ({
  efects,
  setEfects,
}: {
  efects: boolean;
  setEfects: () => void;
}) => {
  return (
    <div
      // Закрытие боковой панели при клике за её пределами
      onClick={setEfects}
      className={`relative text-white z-10 duration-700 ${efects ? "" : "scale-0"}`}
    >
      <div
        // Обёртка боковой панели с фоном
        className={`absolute bg-black dark:bg-opacity-90 bg-opacity-60 z-10 w-full h-screen flex justify-end duration-700 ${
          efects ? "" : "scale-0"
        }`}
      >
        <div
          // Содержимое боковой панели
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          className={`w-1/2 h-full dark-bg bg-orange-400 duration-1000 ${
            efects ? "translate-x-0" : "translate-x-[1500px]"
          }`}
        >
          {/* Кнопка закрытия */}
          <button onClick={setEfects}>
            <X />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
