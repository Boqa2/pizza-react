import { useGetPizzaQuery } from "../../libs/redux/servisec/api";

export const usePizzaData = () => {
  const { data: pizza, isLoading: pizzaLoad } = useGetPizzaQuery({ str: "Pizza-card", type:"type", value: "Пицца" });
  const { data: combos, isLoading: isComboLoad } = useGetPizzaQuery({ str: "combo-card", type:"type", value: "Combo" });
  const { data: zakuski, isLoading: isZakusLoad } = useGetPizzaQuery({ str: "Pizza-card", type:"type", value: "Закуски" });
  const { data: desert, isLoading:isLoadDesert } = useGetPizzaQuery({ str: "Pizza-card", type:"type", value: "Десерты" });
  const { data: dobavki, isLoading:isLoadDob } = useGetPizzaQuery({ str: "forOrders",  type:"type", value: "all" });


  return {
    pizza,
    desert,
    dobavki,
    isLoadDob,
    isLoadDesert,
    zakuski,
    isZakusLoad,
    pizzaLoad,
    combos,
    isComboLoad,
  };
};
