import { Spices } from "../../libs/types/type";
import ListSpice from "./ListSpice";

const Spice = ({loading, items,}: Spices) => {
  
  return (
    <div className="grid overflow-y-auto md:gap-3 gap-1 grid-cols-3">
      {loading ? (
        <>loading....</>
      ) : items ? (
        items.map((val) => (
          <ListSpice
            key={val.id}
            name={val.name}
            price={val.price}
            imageUrl={val.imageUrl}
            id={val.id}
          />
        ))
      ) : (
        ""
      )}
    </div>
  );
};

export default Spice;
