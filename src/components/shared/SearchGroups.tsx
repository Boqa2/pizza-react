import { Search, X } from "lucide-react";
import { ChangeEvent } from "react";
import { useFunction } from "../../libs/useContext";
import ListSearch from "./ListSearch";

const SearchGroup = () => {
  const { values, setValue } =useFunction()

  return (
    <div className="flex flex-col w-1/2 relative">
      <div className="flex flex-col w-full h-full text-slate-500 ligth-text relative">
        <Search
          size={16}
          className="absolute top-1/2 left-2 -translate-y-1/2"
        />
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={values}
          type="text"
          className="pl-7 py-1 dark-border text-black focus:dark-border focus:border-orenge dark:bg-indigo-400 dark:ligth-text border rounded-2xl outline-none h-full w-full"
          placeholder="Найти пиццу"
        />
        {values ? (
          <X
            onClick={()=>setValue("")}
            size={16}
            className="absolute top-1/2 right-2 -translate-y-1/2 text-orange"
          />) : ("")
        }
      </div>
      <div className="absolute top-16 w-full">
        <ListSearch />
      </div>
    </div>
  );
};

export default SearchGroup;
