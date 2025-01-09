import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { PizzaCard } from "../../libs/types/type";

export const ProductCard = ({
  id,
  name,
  discription,
  imageUrl,
  className,
  onClick,
  onClicks,
  priseForSearch,
}: PizzaCard) => {
  return (
    <div
      className={`font-nunito relative py-2 -z-0 w-full  h-full rounded-md dark:text-white ${className}`}
    >
      <div className="w-full h-full pl-5">
        <Link
          to={`home/products/${id}`}
          className="flex rounded-2xl justify-center duration-500 dark:bg-gray-800 bg-forPizza p-3 md:p-6"
        >
          <img
            src={imageUrl}
            className="hover:translate-y-2 active:translate-y-2  w-full  duration-1000"
            alt={name}
          />
        </Link>
        <div className="md:p-2 p-1 md:h-1/2 h-3/5 flex flex-col gap-3">
          <div className="w-full h-1/2 text-wrap">
            <h1 className="font-bold">{name}</h1>
            <p className="text-gray-400 text-[10px] text-wrap ">
              {discription}
            </p>
          </div>
          <div className="inline-flex w-full justify-between items-center">
            <span>
              от <b>{priseForSearch}</b> c
            </span>
            <button
              onClick={onClick}
              className=" but hidden md:flex dark:text-white text-sm h-8 px-2  py-1 z-40 dark:bg-indigo-600"
            >
              <Plus size={15} className="md:mr-1 mr-0" />
              <span className="md:block hidden">Добавить</span>
            </button>
            <button
              onClick={onClicks}
              className="but md:hidden flex  dark:text-white text-sm h-8 px-2 py-1 z-40 dark:bg-indigo-600"
            >
              <Plus size={15} className="md:mr-1 mr-0" />
              <span className="md:block hidden">Добавить</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
