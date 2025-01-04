import { Link } from "react-router-dom";
import { ItemSearch } from "../../libs/types/type";

const ItemsSearch = ({ id, title, priseForSearch, imageUrl }: ItemSearch) => {
  return (
    <Link
      to={`search/carditems/${id}`}
      className="w-full text-wrap py-2 h-full z-20 px-3 items-center dark:bg-indigo-400 dark-border space-x-5 rounded-2xl border flex flex-wrap bg-white"
    >
      <img
        className="object-cover w-14 flex-shrink-0"
        src={imageUrl}
        alt={title}
      />
      <div className="flex-1 min-w-0">
        <p className="text-lg font-nunito font-bold truncate">{title}</p>
        <p className="text-sm text-gray-500 ligth-text truncate">
          {priseForSearch} c
        </p>
      </div>
    </Link>
  );
};

export default ItemsSearch;
