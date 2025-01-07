import { ProductCard } from "./ProductList";
import { PizzaCard } from "../../libs/types/type";
import { useFunction } from "../../libs/useContext";

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
  const { setModal } = useFunction();
  const handleClick = (id: string) => {
    console.log(id);
    setModal(true);
  };
  return (
    <div className={`${className} w-full py-14`} key={title} id={title}>
      <h1 className="font-nunito text-3xl font-bold my-3 mx-5 md:mx-0">
        {title}
      </h1>
      {isLoading ? (
        <div className="min-w-full grid place-items-center">
          <p>Loading.w..</p>
        </div>
      ) : (
        <div
          className={`grid xl:grid-cols-4 md:px-0 px-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 md:gap-6 gap-3`}
        >
          {data &&
            data.map((product) => (
              <ProductCard
                onClick={() => handleClick(product.id)}
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
