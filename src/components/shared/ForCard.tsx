import { Carts } from "../../libs/types/type";

const ForCard = ({
  imageUrl,
  name,
  priseForSearch,
  discription,
}: Carts) => {
  return (
    <div
      className="rounded-lg font-nunito dark:bg-gray-900 w-full p-3 flex"
    >
      <div className="w-1/3">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="w-3/4">
        <div>
          <h1>{name}</h1>
          <p className="text-[10px]">{discription}</p>
        </div>
        <div className="dark-bg  h-px bg-opacity-80 my-3"></div>
        <div className=" flex w-full justify-between">
          <div className="flex gap-3 items-center">
            <button className="fuck">-</button>
            <div className="">{"1"}</div>
            <button className="fuck">+</button>
          </div>
          <div>{priseForSearch} c</div>
        </div>
      </div>
    </div>
  );
};

export default ForCard;
