import { useState } from "react";
import { useFunction } from "../../libs/useContext";
import { cats } from "../UI/data";
import Button from "./Button";
import { X } from "lucide-react";

const MobileCatigori = () => {
  const [open, setOpen] = useState<boolean>(false);
  const cat = cats[0];
  const { index, setIndex } = useFunction();
  return (
    <>
      <Button
        className="lg:hidden text-white block dark:bg-indigo-600 font-bold h-full py-3"
        onClick={() => setOpen(!open)}
      >
        {open ? "Откырь " : "Закрат"} категории
      </Button>
      <div
        className={`${!open ? "scale-0" : ""} inline-flex py-1 duration-500 absolute top-0 w-1/2 font-nunito  right-0 gap-1 container dark:bg-indigo-600 dark:text-white flex-col  bg-gray-200 p-1 rounded-2xl`}
      >
        <div className="w-full flex justify-end">
          <Button
            className="p-4 border-none text-end"
            onClick={() => setOpen(!open)}
          >
            <X />
          </Button>
        </div>
        {cat.map((cat, i) => (
          <a
            key={i}
            onClick={() => setIndex(i++)}
            className={`
                  flex items-center w-full font-bold h-10 rounded-2xl px-5 ",
                  ${
                    index === i &&
                    "shadow-lg dark:shadow-indigo-500 dark-text bg-white shadow-gray-200  text-white"
                  }
                `}
          >
            <button onClick={() => setIndex(i++)}>{cat}</button>
          </a>
        ))}
      </div>
    </>
  );
};

export default MobileCatigori;
