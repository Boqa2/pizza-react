import { ProductCard } from "./ProductList";
import { PizzaCard } from "../../libs/types/type";
import { useFunction } from "../../libs/useContext";
import SkeletonPizzaCard from "./Skeleton-card-pizza";
import supabase from "../../libs/utils/supabase";
import { useDispatch } from "react-redux";
import { addToLocalStorage } from "../../libs/redux/slice";
import toast from "react-hot-toast";

export const ProductsGroupList = ({
  title,
  data,
  className,
  isLoading,
}: {
  className?: string;
  title: string;
  data?: PizzaCard[];
  isLoading: boolean;
}) => {
  const dispatch = useDispatch();
  const { setModal, setPizzaId } = useFunction();

  const addToCart = async (id: string) => {
    try {
      const { data } = await supabase
        .from("Pizza-card")
        .select("*")
        .eq("id", id);
      const item = data && data[0];
      const storedItems = localStorage.getItem("items");
      const currentItems: PizzaCard[] = storedItems
        ? JSON.parse(storedItems)
        : [];
      const isItemExists = currentItems.some(
        (storedItem) => storedItem.id === id
      );
      if (!isItemExists) {
        const updatedItems = [...currentItems, item];
        localStorage.setItem("items", JSON.stringify(updatedItems)); // Обновляем localStorage
        dispatch(addToLocalStorage(item)); // Обновляем Redux
        const toastId = toast.loading("Добавляется", {
          className: "text-white font-bold font-nunito bg-blue-500",
        });
        setTimeout(() => {
          toast.dismiss(toastId);
          toast.success("Добавлено успешно!", {
            className: "bg-green-500 text-white font-bold font-nunito",
          });
        }, 3000);
        return { data: item };
      } else {
        toast.error("Вы уже добавили этот элемент", {
          className: "text-white font-bold bg-red-500 font-nunito",
        });

        // Если элемент с таким ID уже существует
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick = (id: string) => {
    setModal(true);
    setPizzaId(id);
  };
  return (
    <div className={`${className} w-full h-full py-16`} key={title} id={title}>
      <h1 className="font-nunito text-3xl  font-bold my-3 mx-5 md:mx-0">
        {title}
      </h1>
      {isLoading ? (
        <div className="grid xl:grid-cols-4 md:px-0 w-full h-full px-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 md:gap-6 gap-4 place-items-center">
          <SkeletonPizzaCard />
          <SkeletonPizzaCard />
          <SkeletonPizzaCard />
          <SkeletonPizzaCard />
        </div>
      ) : (
        <div
          className={`grid xl:grid-cols-4 md:px-0 px-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 md:gap-6 gap-10 gap-y-10`}
        >
          {data &&
            data.map((product) => (
              <ProductCard
                onClick={() => handleClick(product.id)}
                addToCart={() => addToCart(product.id)}
                onClicks={() => addToCart(product.id)}
                price={product.price}
                type={product.type}
                id={product.id}
                discription={product.discription}
                key={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                priseForSearch={product.priseForSearch}
              />
            ))}
        </div>
      )}
    </div>
  );
};
