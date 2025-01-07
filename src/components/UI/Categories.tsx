import { useFunction } from "../../libs/useContext";
import Container from "../shared/Container";
import MobileCatigori from "../shared/MobilCatigori";
import { cats } from "./data";

export const Catigoties = ({ className }: { className?: string }) => {
  const { activeCategory, setActiveCategory } = useFunction();
  const categories = cats[0];

  return (
    <Container className="sticky w-full z-10 justify-between top-0 py-1 duration-700 px-1 md:px-6 bg-gray-100 items-center flex dark:bg-gray-900">
      <div className="flex justify-between relative w-full px-1 items-center h-3/4">
        <MobileCatigori active={activeCategory} items={categories} />
        <div
          className={`hidden w-full justify-between font-nunito lg:inline-flex p-1 h-full duration-700 dark:bg-indigo-600 dark:text-white bg-gray-200 rounded-2xl ${className}`}
        >
          {categories.map((category) => (
            <a
              key={category.id}
              className={`flex items-center duration-300 cursor-pointer font-bold justify-center w-full py-2 rounded-2xl px-5 ${
                activeCategory === category.id
                  ? "bg-white shadow-lg dark:shadow-indigo-500 dark:text-indigo-600 shadow-gray-200 text-orange-500"
                  : ""
              }`}
              onClick={() => {
                setActiveCategory(category.id); // Установить активную категорию
                document
                  .getElementById(category.id)
                  ?.scrollIntoView({ behavior: "smooth" }); // Плавный скролл
              }}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

