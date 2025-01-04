import { ProductCard } from "./ProductList";
import { PizzaCard } from "../../libs/types/type";

export const ProductsGroupList = ({ title, data, className }: { className?:string, title: string, data?:PizzaCard[] }) => {
  // const interSection = useRef(null)
  // const insection = useIntersection(interSection, {
  //     threshold: 0.4
  // })
  // useEffect(()=>{
  //     if(insection?.isIntersecting){
  //         console.log(title, categoryId);

  //     }
  // },[insection?.isIntersecting, title, categoryId])
  return (
    <div className={`${className}`} id={title}>
      <h1 className="font-nunito text-4xl font-bold my-3">{title}</h1>
      <div className={`grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 md:gap-6 gap-2`}>
        {data &&
          data.map((product) => (
            <ProductCard
              price={product.price}
              type={product.type}
              id={product.id}
              description={product.description}
              key={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              priseForSearch={product.priseForSearch}
            />
          ))}
      </div>
    </div>
  );
};
