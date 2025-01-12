import { createContext, useState, ReactNode, useContext } from "react";

interface ContextType {
  values: string;
  setValue: (value: string) => void;
  index: number;
  setIndex: (value: number) => void;
  modal: boolean;
  setModal: (value: boolean) => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  efects: boolean;
  setCurrentPrice: (value: number) => void;
  currentPrice: number | null;
  setSelectedSize: (value: string) => void;
  selectedSize: string;
  setEfects: (value: boolean) => void;
  pizzaId: string;
  setPizzaId: (value: string) => void;
  cart: boolean;
  setCart: (value: boolean) => void;
  activeCategory: string;
  setActiveCategory: (value: string) => void;
}

// Создание контекста
const NotificationContext = createContext<ContextType | undefined>(undefined);

// Провайдер контекста
export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [values, setValue] = useState<string>("");
  const [index, setIndex] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const [efects, setEfects] = useState<boolean>(true);
  const [modal, setModal] = useState<boolean>(false);
  const [cart, setCart] = useState<boolean>(true);
  const [pizzaId, setPizzaId] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState("lg");
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Пицца");

  return (
    <NotificationContext.Provider
      value={{
        values,
        modal,
        cart,
        currentPrice, setCurrentPrice,
        selectedSize,
        setSelectedSize,
        pizzaId,
        setPizzaId,
        setCart,
        activeCategory,
        setActiveCategory,
        open,
        setOpen,
        setModal,
        efects,
        setEfects,
        setValue,
        index,
        setIndex,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

// Хук для использования контекста
// eslint-disable-next-line react-refresh/only-export-components
export const useFunction = () => {
  const contexts = useContext(NotificationContext);

  if (!contexts) {
    throw new Error("useFunction must be used within a NotificationProvider");
  }

  return contexts;
};
