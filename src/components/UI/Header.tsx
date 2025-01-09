import { Menu, Search, ShoppingCart, User } from "lucide-react";
import Button from "../shared/Button";
import Container from "../shared/Container";
import SearchGroup from "../shared/SearchGroups";
import { Switch } from "../shared/Switch";
import { useState } from "react";
import { useFunction } from "../../libs/useContext";

const Header = ({ img, setEfects }: { img: string; setEfects: () => void }) => {
  const [open, setOpen] = useState<boolean>(false);
  
  const { setValue, setCart, cart } = useFunction();
  return (
    <Container className="px-0 overflow-y-visible">
      <header className="flex justify-between overflow-x-visible items-center gap-2 w-full dark-border p-2 md:p-5 h-1/3 border-b ">
        <div className="flex gap-1 items-center">
          <img className="w-11 h-9" src={img} alt="" />
          <div className="leading-1">
            <h1 className="md:text-2xl text-sm font-nunito uppercase font-black">
              React Pizza
            </h1>
            <p className="text-[10px] hidden md:block md:text-sm text-gray-400 leading-3 ">
              вкусней не куда
            </p>
          </div>
        </div>
        <SearchGroup setOpen={() => setOpen(!open)} open={open} />
        <div className="inline-flex relative gap-2">
          {!open && (<Button
            onClick={() => {
              setOpen(!open);
              setValue("");
            }}
            className={`text-orenge absolute top-1/2  right-1/2 tr lg:-right-1/2 lg:translate-x-1/2 -translate-x-1/2 active:-translate-y-5 -translate-y-1/2 z-30 rounded-none border-none px-2 py-2 p-0 dark-text`}
          >
            <Search size={20} className="" />
          </Button>)}
          <button
            onClick={setEfects}
            className="text-orenge block lg:hidden dark-text"
          >
            <Menu size={35} />
          </button>
        </div>
        <div className="hidden lg:block space-x-4">
          <Switch />
          <Button className="font-nunito gap-1">
            <User size={20} />
            Войти
          </Button>
          <Button onClick={()=>setCart(!cart)} className="">
            <ShoppingCart size={20} />
          </Button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
