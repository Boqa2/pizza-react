import { Ingridients } from "../../libs/types/type";

const ListSpice = ({ imageUrl, price, name }: Ingridients) => {
  return (
    <div className="border flex flex-col items-center justify-between font-nunito font-bold text-black rounded-lg p-2 ">
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div className="flex items-center flex-col">
        <div>
          <h1 className="md:text-sm text-[10px] text-center">{name}</h1>
        </div>
        <div>
          <p>{price} c</p>
        </div>
      </div>
    </div>
  );
};

export default ListSpice;
