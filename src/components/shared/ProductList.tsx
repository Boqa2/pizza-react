import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { PizzaCard } from "../../libs/types/type";

export const ProductCard = ({
  id,
  name,
  description,
  imageUrl,
  className,
  priseForSearch,
}: PizzaCard) => {
  return (
    <div
      className={`font-nunito py-4 relative -z-0 w-full h-auto rounded-md dark:text-white ${className}`}
    >
      <Link to={`home/products/${id}`}>
        <div className="flex rounded-2xl  justify-center bg-forPizza p-3 md:p-6">
          <img
            src={imageUrl}
            className="hover:translate-y-2  w-full  duration-1000"
            alt={name}
          />
        </div>
        <div className="md:p-2 p-1">
          <h1 className="mb-1 mt-3 font-bold">{name}</h1>
          <p>{description}</p>
          <div className="inline-flex justify-between items-center  md:mt-4">
            <span>
              от <b>{priseForSearch} P</b>
            </span>
          </div>
        </div>
      </Link>
      <Button className="absolute md:bottom-4 bottom-1 text-sm h-8 px-2 right-3 py-1 w-fit z-40 dark:bg-indigo-600">
        <Plus size={15} className="md:mr-1 mr-0" />
       <span className="md:block hidden">Добавить</span> 
      </Button>
    </div>
  );
};
