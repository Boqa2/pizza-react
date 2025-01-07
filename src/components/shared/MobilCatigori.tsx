import { useState } from "react";
import Button from "./Button";
import { X } from "lucide-react";
import { Pros } from "../../libs/types/type";
import { useFunction } from "../../libs/useContext";

const MobileCategory = ({
  items,
  active,
}: {
  items: Pros[];
  active: string;
}) => {
  const [open, setOpen] = useState<boolean>(true); // Состояние боковой панели

  const { setActiveCategory } = useFunction();
  return (
    <>
      <Button
        className="lg:hidden md:w-1/2 w-full dark:text-white  bg-orenge text-sm text-white block duration-500 dark:bg-indigo-600 font-bold h-full p-2"
        onClick={() => setOpen(!open)}
      >
        {open ? "Открыть" : "Закрыть"} категории
      </Button>

      <div
        className={`${
          !open
            ? "translate-y-0 duration-300"
            : "-translate-y-[1000px] duration-1000"
        } inline-flex py-1 duration-00 absolute top-0 w-1/2 font-nunito left-0 gap-1 container duration-500 dark:bg-indigo-600 dark:text-white flex-col bg-gray-200 p-1 rounded-2xl`}
      >
        {/* Кнопка закрытия */}
        <div className="w-full flex justify-end">
          <Button
            className="pt-2 dark:text-white border-none text-end"
            onClick={() => setOpen(!open)}
          >
            <X />
          </Button>
        </div>

        {/* Список категорий */}
        {items &&
          items.map((category) => (
            <div
              key={category.id}
              className={`flex items-center w-full font-bold rounded-2xl ${
                active === category.id &&
                "bg-white shadow-lg dark:shadow-indigo-500 dark:text-indigo-600 shadow-gray-200  text-orenge"
              }`}
            >
              <button
                className="w-full px-5 py-2"
                onClick={() => {
                  setOpen(!open);
                  setActiveCategory(category.id); // Установить активную категорию
                  document
                    .getElementById(category.id)
                    ?.scrollIntoView({ behavior: "smooth" }); // Плавный скролл
                }}
              >
                {category.name}
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default MobileCategory;
