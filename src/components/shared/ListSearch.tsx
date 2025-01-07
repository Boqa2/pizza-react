import { useMemo } from "react";
import { useFunction } from "../../libs/useContext";
import ItemsSearch from "./ItemsSearch";
import { useGetPizzaQuery } from "../../libs/redux/servisec/api";
const ListSearch = () => {
  const { values } = useFunction();
  const { data, isLoading } = useGetPizzaQuery({str:"Pizza-card", type:"search", value:"all"});

  const filter = useMemo(() => {
    if (!data) return [];
    return data.filter(
      (item) =>(
        item.name.toLowerCase().includes(values.toLowerCase()) || item.type.toLowerCase().includes(values.toLowerCase()))
    );
  }, [data, values]);

  return (
    <div className="w-full relative z-50 h-full">

    <div className="flex flex-col  gap-2">
      {isLoading ? (
        <p>loadingg</p>
      ) : values ? (
        filter.map((value) => (
          <ItemsSearch
            type={value.type}
            id={value.id}
            title={value.name}
            key={value.id}
            imageUrl={value.imageUrl}
            priseForSearch={value.priseForSearch}
          />
        ))
      ) : (
        ""
      )}
    </div>
    </div>
  );
};

export default ListSearch;
