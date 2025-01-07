import { X } from "lucide-react";
import { useFunction } from "../../libs/useContext";
// import { Link } from "react-router-dom";
// import {
//   useGetDobavkiQuery,
//   useGetPizzaQuery,
// } from "../../libs/redux/servisec/api";

const PizzaOpenModal = () => {
  // const { data: order } = useGetDobavkiQuery();
  // const { data: pizza } = useGetPizzaQuery();
  const { setModal } = useFunction();
  return (
    <div
      onClick={() => setModal(false)}
      className=" fixed flex items-center justify-center top-0 bottom-0 z-50 w-full h-screen bg-black bg-opacity-55 place-items-center py-5 "
    >
      <div className="w-3/4 h-full bg-white"></div>
      <div className="h-full">
        <X />
      </div>
    </div>
  );
};

export default PizzaOpenModal;
