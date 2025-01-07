import { Search, X } from "lucide-react";
import { ChangeEvent } from "react";
import { useFunction } from "../../libs/useContext";
import ListSearch from "./ListSearch";

const SearchGroup = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: () => void;
}) => {
  const { values, setValue } = useFunction();

  return (
    <div className="flex flex-col items-center w-full md:w-1/2 relative">
      <div
        className={`inline-flex items-center flex-col w-full h-full text-slate-500 ligth-text relative`}
      >
        <Search
          size={15}
          className={`absolute  ${
            open ? "scale-105 z-0 " : "scale-0"
          } z-40 top-1/2  left-1 duration-700 -translate-y-1/2`}
        />

        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          value={values}
          type="text"
          className={` ${
            open ? "scale-105 z-0 " : "scale-0"
          } w-full md:py-3 h-full lg:pl-10 pl-8 duration-700 py-2 dark-border placeholder:dark:text-white text-black focus:dark-border focus:border-orenge dark:bg-indigo-400 dark:ligth-text border rounded-2xl outline-none`}
          placeholder="Найти пиццу"
        />

        <X
          onClick={() => {
            setValue("");
            setOpen();
          }}
          size={16}
          className={`absolute top-1/2 z-40 right-3 ${
            open ? "scale-100" : "scale-0"
          } duration-700 -translate-y-1/2`}
        />
      </div>

      {/* Переносим список поиска в портал */}
      {open && (
        <div
          className="absolute w-full overflow-y-auto top-16 z-50 max-h-80  pl-2 rounded-2xl"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "transparent transparent",
          }}
        >
          {values && values.length > 0 ? <ListSearch /> : null}
        </div>
      )}
    </div>
  );
};

export default SearchGroup;
