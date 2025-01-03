import { createContext, useState, ReactNode, useContext } from "react";

interface ContextType {
  values: string;
  setValue: (value: string) => void;
  index:number;
  setIndex:(value:number)=>void
  efects:boolean, setEfects:(value:boolean)=>void
}

// Создание контекста
const NotificationContext = createContext<ContextType | undefined>(undefined);

// Провайдер контекста
export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [values, setValue] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [efects, setEfects] = useState<boolean>(true);

  return (
    <NotificationContext.Provider value={{ values, efects, setEfects, setValue, index, setIndex }}>
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


