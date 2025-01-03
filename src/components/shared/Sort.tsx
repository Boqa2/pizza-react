import { ArrowUpDown } from "lucide-react";
import { Chart } from "../../libs/types/type";

export const SortPopup = ({ className }: Chart) => {
  return (
    <div
      className={`inline-flex h-full items-center text-wrap gap-1 py-3 dark:bg-indigo-600  dark:text-white bg-gray-200 px-5  rounded-2xl cursor-pointer ${className}`}>
      <ArrowUpDown size={16} />
      <b>Сортировка</b>
      <p className="text-orenge dark:text-white">популярное</p>
    </div>
  );
};