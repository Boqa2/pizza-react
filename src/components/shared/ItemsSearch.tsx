import { Link,  } from "react-router-dom";
import { ItemSearch } from "../../libs/types/type";

const ItemsSearch = ({ id, title, priseForSearch, imageUrl}:ItemSearch) => {
  return (
    <Link to={`search/carditems/${id}`} className="w-full text-wrap py-2 h-full z-10 px-3 items-center dark:bg-indigo-400  dark-border space-x-5 rounded-2xl border flex bg-white">
      <img className="object-cover w-14" src={imageUrl} alt={title} />
      <p className=" text-lg font-nunito font-bold">{title}</p>
      <p className="text-sm text-gray-500 ligth-text">{priseForSearch} c</p>
    </Link>
  );
};

export default ItemsSearch;
