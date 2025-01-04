import { useFunction } from "../../libs/useContext";
import Container from "../shared/Container";
import MobileCatigori from "../shared/MobilCatigori";
import { cats } from "./data";

export const Catigoties = ({ className }: { className?: string }) => {
  const cat = cats[0];
  const { index, setIndex } = useFunction();
  return (
    <Container className="sticky w-full z-10 justify-between top-0 py-5 md:px-6  bg-gray-100 items-center flex dark:bg-gray-900">
      <div className="flex justify-between relative w-full items-center h-3/4">
      <MobileCatigori />
        <div
          className={`hidden w-full justify-between font-nunito lg:inline-flex p-1 h-full dark:bg-indigo-600 dark:text-white  bg-gray-200  rounded-2xl ${className}`}
        >
          {cat.map((cat) => (
            <a
              key={cat.id}
              className={`flex items-center font-bold justify-center w-full py-2 rounded-2xl px-5 ",
           ${
             index === cat.id &&
             "bg-white shadow-lg dark:shadow-indigo-500 dark:text-indigo-600 shadow-gray-200  text-orenge"
           }
          `}
            >
              <button onClick={() => setIndex(cat.id)}>{cat.name}</button>
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};
