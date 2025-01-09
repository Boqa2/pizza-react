import { ChevronDown, X } from "lucide-react";
import { useFunction } from "../../libs/useContext";
import { usePizzaData } from ".";
import { useGetOnePizzaQuery } from "../../libs/redux/servisec/api";
import { FormEvent, useState } from "react";

const PizzaOpenModal = () => {
  const { dobavki, isLoadDob } = usePizzaData();
  const { setModal, pizzaId } = useFunction();
  const { data: forId } = useGetOnePizzaQuery({
    str: "Pizza-card",
    id: pizzaId,
  });

  // Храним текущий выбранный размер и цену
  const [selectedSize, setSelectedSize] = useState("lg");
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);

  // Обновляем цену при изменении размера
  const handleSizeChange = (size: string, price: number) => {
    setSelectedSize(size);
    setCurrentPrice(price);
  };

  return (
    <div
      onClick={() => setModal(false)}
      className=" fixed flex items-center justify-center top-0 bottom-0 z-50 w-full h-screen bg-black bg-opacity-55 place-items-center py-0 lg:py-5 "
    >
      <div onClick={(e:FormEvent<HTMLDivElement>)=>e.stopPropagation()} className="lg:w-4/5 p-6 w-full overflow-y-auto h-full rounded-2xl bg-white">
        <div className="block md:hidden">
          <button className="but rounded-full px-3">
            <ChevronDown />
          </button>
        </div>
        <div className="flex lg:flex-row h-full flex-col">
          <div className="w-[55%] h-full">
            <div className={`w-${selectedSize ? "full" : "1/2"} h-full p-10`}>
              <img
                className="w-full h-full"
                src={forId?.imageUrl}
                alt={forId?.name}
              />
            </div>
          </div>
          <div>
            <div className="text-black w-full">
              <h1 className="text-2xl font-bold">{forId?.name}</h1>
              <div className="mt-4 w-full bg-slate-600 px-3 flex items-center duration-300 cursor-pointer font-bold justify- py-2 rounded-2xl  gap-3">
                {forId?.price.map((val) => (
                  <button
                    key={val.size}
                    onClick={() => handleSizeChange(val.size, val.price)}
                    className={`px-4 py-2 rounded-md ${
                      selectedSize === val.size
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-black"
                    }`}
                  >
                    {val.size.toUpperCase()}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-lg">
                Цена: <span className="font-semibold">{currentPrice || 0}₽</span>
              </p>
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
