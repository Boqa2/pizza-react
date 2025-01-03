import { useState } from "react";
import { cats } from "../UI/data"; // Предполагается, что это массив категорий
import Button from "./Button";
import { X } from "lucide-react";
import { useFunction } from "../../libs/useContext";

const MobileCategory = () => {
  const [open, setOpen] = useState<boolean>(false); // Состояние боковой панели
  const {index, setIndex} = useFunction(); // Состояние выбранной категории
  const categories = cats[0]; // Предполагается, что cats[0] — массив объектов категорий

  return (
    <>
      
      <Button
        className="lg:hidden w-1/2 bg-orenge text-sm text-white block dark:bg-indigo-600 font-bold h-full p-2"
        onClick={() => setOpen(!open)}
      >
        {!open ? "Открыть" : "Закрыть"} категории
      </Button>

     
      <div
        className={`${
          !open ? "scale-0" : "scale-100"
        } inline-flex py-1 duration-500 absolute top-0 w-1/2 font-nunito right-0 gap-1 container dark:bg-indigo-600 dark:text-white flex-col bg-gray-200 p-1 rounded-2xl`}
      >
        {/* Кнопка закрытия */}
        <div className="w-full flex justify-end">
          <Button
            className="pt-2 border-none text-end"
            onClick={() => setOpen(false)}
          >
            <X />
          </Button>
        </div>

        {/* Список категорий */}
        {  categories && categories.map((category) => (
          <div
            key={category.id}
            className={`flex items-center w-full font-bold rounded-2xl ${
             index === category.id &&
             "bg-white shadow-lg dark:shadow-indigo-500 dark:text-indigo-600 shadow-gray-200  text-orenge"
           }`}
          >
            <button
              className="w-full px-5 py-2"
              onClick={() => setIndex(category.id)}
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

