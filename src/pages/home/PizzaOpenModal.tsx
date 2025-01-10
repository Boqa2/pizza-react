import { ChevronDown, X } from "lucide-react";
import { useFunction } from "../../libs/useContext";
import { useGetOnePizzaQuery } from "../../libs/redux/servisec/api";
import { FormEvent, useState } from "react";
import Spice from "../../components/shared/Spice";
import { usePizzaData } from ".";

const PizzaOpenModal = () => {
  const { setModal, pizzaId } = useFunction();
  const { data: forId } = useGetOnePizzaQuery({
    str: "Pizza-card",
    id: pizzaId,
  });

  const { dobavki, isLoadDob } = usePizzaData();
  // Храним текущий выбранный размер и цену
  const [selectedSize, setSelectedSize] = useState("lg");
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);

  console.log(currentPrice);

  // Обновляем цену при изменении размера
  const handleSizeChange = (size: string, price: number) => {
    setSelectedSize(size);
    setCurrentPrice(price);
  };
  console.log(dobavki);

  return (
    <div
      onClick={() => setModal(false)}
      className=" fixed flex items-center font-nunito justify-center  top-0 bottom-0 z-50 w-full h-screen bg-black bg-opacity-55 place-items-center py-0 lg:py-5 "
    >
      <div
        onClick={(e: FormEvent<HTMLDivElement>) => e.stopPropagation()}
        className="lg:w-4/5 relative gap-5 lg:p-6 p-1 w-full  h-full rounded-2xl bg-white"
      >
        <div className="block md:hidden">
          <button
            onClick={() => setModal(false)}
            className="but fixed bg-white border-none shadow-2xl shadow-indigo-600 top-0 rounded-full h-12 p-0 w-12"
          >
            <ChevronDown size={16} />
          </button>
        </div>
        <div className="flex lg:flex-row gap-3 h-full flex-col">
          <div className="lg:w-3/5 w-full h-full">
            <div
              className={`flex justify-center pl-10 items-center h-full p-5`}
            >
              <img
                className={`w-${
                  selectedSize === "lg"
                    ? "3/4"
                    : selectedSize === "sm"
                    ? "4/5"
                    : selectedSize === "xl"
                    ? "5/6"
                    : ""
                } h-${
                  selectedSize === "lg"
                    ? "3/4"
                    : selectedSize === "sm"
                    ? "4/5"
                    : selectedSize === "xl"
                    ? "5/6"
                    : ""
                } `}
                src={forId?.imageUrl}
                alt={forId?.name}
              />
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full">
            <div className="text-black leading-none w-full ">
              <h1 className="text-2xl font-bold">{forId?.name}</h1>
              <div className="mt-4 w-full bg-gray-400 p-[3px] flex items-center duration-300 cursor-pointer font-nunito font-bold  rounded-full  gap-3">
                {forId?.price?.map((val) => (
                  <button
                    key={val.size}
                    onClick={() => handleSizeChange(val.size, val.price)}
                    className={`w-full shadow-gray-600 duration-300 py-1 rounded-full ${
                      selectedSize === val.size
                        ? "bg-white shadow-md"
                        : "tex"
                    }`}
                  >
                    {val.price}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-hidden pt-3">
              <div className="overflow-y-auto pb-16 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent scrollbar-none max-h-96">
                <Spice loading={isLoadDob} items={dobavki} />
              </div>
            </div>
            <div className="">
              <button className="but absolute bottom-0 bg-orenge  border-none dark:text-white w-full">
                Добавить в корзину 
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:block hidden h-full">
        <X />
      </div>
    </div>
  );
};

export default PizzaOpenModal;
