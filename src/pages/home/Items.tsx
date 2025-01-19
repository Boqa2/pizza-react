import { useState } from "react";
import { usePizzaData } from ".";
import Spice from "../../components/shared/Spice";
import { useGetOnePizzaQuery } from "../../libs/redux/servisec/api";
import { useFunction } from "../../libs/useContext";

const Items = () => {
    const { pizzaId, setCurrentPrice, setSelectedSize, selectedSize } = useFunction();
      const { data: forId } = useGetOnePizzaQuery({
        str: "Pizza-card",
        id: pizzaId,
      });
      const { dobavki, isLoadDob } = usePizzaData();
      const [sizes, setSizes ]=useState<boolean>(false)
      const handleSizeChange = (size: string, price: number) => {
        setSelectedSize(size);
        setCurrentPrice(price);
      };
    return ( 
        <div className="flex lg:flex-row gap-3 h-full flex-col">
          <div className="lg:w-3/5 w-full h-full">
            <div
              className={`flex justify-center pl-10 items-center h-full p-5`}
            >
              <img
                className={`w-${
                  selectedSize === "lg"
                    ? "4/5"
                    : selectedSize === "sm"
                    ? "3/4"
                    : selectedSize === "xl"
                    ? "full"
                    : ""
                } h-${
                  selectedSize === "lg"
                    ? "4/5"
                    : selectedSize === "sm"
                    ? "3/4"
                    : selectedSize === "xl"
                    ? "full"
                    : ""
                } `}
                src={!sizes ? (forId?.imageUrl) : (forId?.forImage?.imageUrl)}
                alt={forId?.name}
              />
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full">
            <div className="text-black leading-none w-full ">
              <h1 className="text-2xl font-bold">{forId?.name}</h1>
              <p className="text-xs">{forId?.discription ? forId.discription : ""}</p>
              {forId?.ingredients ? forId.ingredients : ""}
              <div
                className={`mt-4 w-full bg-gray-300 ${
                  forId?.price ? "p-[3px]" : "justify-center py-2 "
                } flex items-center duration-300 cursor-pointer font-nunito font-bold  rounded-full  gap-3`}
              >
                {forId?.price
                  ? forId?.price?.map((val) => (
                      <button
                        key={val.size}
                        onClick={()=>handleSizeChange(val.size, val.price)}
                        className={`w-full shadow-gray-600 duration-300 py-1 rounded-full ${
                          selectedSize === val.size
                            ? "bg-white shadow-md"
                            : "tex"
                        }`}
                      >
                        {val.price}
                      </button>
                    ))
                  : forId?.forImage ? (
                    <button className={`w-full shadow-gray-600 duration-300 py-1 rounded-full ${
                        sizes !== sizes 
                          ? "bg-white shadow-md"
                          : "tex"
                      }`} onClick={()=>setSizes(!sizes)}>
                        {forId.forImage.size}
                    </button>
                  ):"1шт"}
              </div>
            </div>
            <div className="overflow-hidden pt-3">
              <div className="overflow-y-auto pb-16 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent scrollbar-none max-h-80">
                {forId?.price ? (
                  <Spice loading={isLoadDob} items={dobavki} />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="">
              <button className="but absolute bottom-0 bg-orenge dark-bg text-white  border-none dark:text-white w-full">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
     );
}
 
export default Items;