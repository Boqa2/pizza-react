import Container from "../../components/shared/Container";
import { ProductsGroupList } from "../../components/shared/ProductGroup";
import { useGetPizzaQuery } from "../../libs/redux/servisec/api";

const HomePage = () => {
  const { data:pizza } = useGetPizzaQuery();
  return (
    <Container className="md:px-6 px-1">
      <div className="space-x-4 flex">
        <div className="hidden bg-red-500 w-1/4">
          <h1>Фильтрация</h1>
        </div>
        <div>
          <ProductsGroupList data={pizza} title="Пиццы" />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
