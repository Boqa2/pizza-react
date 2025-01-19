import {  ArrowRight, X } from "lucide-react";
import { MouseEvent, useEffect } from "react";
import { useFunction } from "../../libs/useContext";
import ForCard from "../shared/ForCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../libs/redux/store";
import { getLocalStorage } from "../../libs/redux/slice";

const Cart = () => {
  const { cart, setCart } = useFunction();
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state: RootState) => state.function.addToLocal
  );
  useEffect(() => {
    dispatch(getLocalStorage());
  }, [dispatch]);

  const filItems = cartItems
  .filter((item) => item.priseForSearch)
  .reduce((acc, i) => acc + Number(i.priseForSearch), 0);

  const total = filItems * 0.1 + 20

  return (
    <div
      onClick={() => setCart(!cart)}
      className={`sticky  top-0  text-white duration-1000 z-50  ${
        !cart ? "-translate-x-0" : "-translate-y-[1550px]"
      }`}
    >
      <div
        // Обёртка боковой панели с фоном
        className={`fixed top-0 bg-black dark:bg-opacity-90 bg-opacity-60 duration-1000 z-10 w-full h-screen flex justify-end`}
      >
        <div
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          className={`md:w-1/3 w-full pt-3 pb-0 h-full space-y-5 dark:bg-gray-950 overflow-y-auto scrollbar-none bg-slate-200 duration-1000 ${
            !cart ? "translate-y-0" : "-translate-y-[1500px]"
          }`}
        >
          <div className="w-full inline-flex justify-between">
            <h1>В корзине {cartItems.length !== 0 ? (cartItems.length): "нет"} товаров</h1>
            <button
              className="dark-text text-orenge"
              onClick={() => setCart(!cart)}
            >
              <X />
            </button>
          </div>
          <div className="flex flex-col px-3 gap-5">
            {cartItems.map((item) => (
              <ForCard
                key={item.id}
                discription={item.discription}
                imageUrl={item.imageUrl}
                name={item.name}
                priseForSearch={item.priseForSearch}
              />
            ))}
          </div>
            <div className="bg-white font-nunito font-bold text-black sticky  p-2 bottom-0 w-full">
              <div className="flex flex-col mb-3 gap-2">
                <div className="flex justify-between">
                <h1>Налог:</h1>
                <p>{filItems * 0.1 + 20}c</p>
                </div>
                <div className="flex justify-between">
                  <h1>Итого:</h1>
                  <p>{filItems + total}c</p>
                </div>
              </div>
              {cartItems.length !== 0 ? (
                <button className="but w-full bg-orenge gap-5 dark-bg text-white group dark:text-white font-bold ">
                  Оформит заказ <ArrowRight className="translate-x-0 group-hover:translate-x-2 duration-500" size={16}/>
                </button>
              ) : (
                <div className="w-full flex items-center justify-center">
                  Ваша корзина пуста
                </div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
