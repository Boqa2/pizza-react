import { useEffect, useRef } from "react";
import Container from "../../components/shared/Container";
import { ProductsGroupList } from "../../components/shared/ProductGroup";
import { cats } from "../../components/UI/data";
import { useFunction } from "../../libs/useContext";
import { usePizzaData } from ".";

const HomePage = () => {
  const {
    pizza,
    pizzaLoad,
    desert,
    drinks,
    isLoadNap,
    isLoadDesert,
    isZakusLoad,
    zakuski,
    combos,
    isComboLoad,
  } = usePizzaData();
  const { setActiveCategory } = useFunction();
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const categories = cats[0];

  // Привязка рефов для секций
  useEffect(() => {
    categories.forEach((category) => {
      sectionsRef.current[category.id] = document.getElementById(category.id);
    });
  }, [categories]);

  // Обработчик скролла
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const { id } of categories) {
        const section = sectionsRef.current[id];
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveCategory(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories, setActiveCategory]);

  return (
    <Container className="md:px-6 px-1">
      <div className="flex">
        <div className="hidden px-5 bg-red-500 w-1/4">
          <h1>Фильтрация</h1>
        </div>
        <div className="flex flex-col w-full gap-10">
          <ProductsGroupList isLoading={pizzaLoad} data={pizza} title="Пицца" />
          <ProductsGroupList
            isLoading={isComboLoad}
            data={combos}
            title="Комбо"
          />
          <ProductsGroupList
            isLoading={isZakusLoad}
            data={zakuski}
            title="Закуски"
          />
          <ProductsGroupList
            isLoading={isLoadDesert}
            data={desert}
            title="Десерты"
          />
          <ProductsGroupList
            isLoading={isLoadNap}
            data={drinks}
            title="Напитки"
          />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
