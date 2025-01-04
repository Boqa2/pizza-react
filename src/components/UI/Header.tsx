import { Menu, ShoppingCart, User } from "lucide-react";
import Button from "../shared/Button";
import Container from "../shared/Container";
import SearchGroup from "../shared/SearchGroups";
import { Switch } from "../shared/Switch";

const Header = ({ img,setEfects }: { img: string, setEfects:()=>void }) => {
  return (
    <Container className="px-0">
      <header className="flex justify-between items-center gap-2 w-full dark-border p-2 md:p-5 h-1/3 border-b ">
        <div className="flex gap-1 items-center">
          <img className="w-11 h-9" src={img} alt="" />
          <div className="leading-1">
            <h1 className="md:text-2xl text-sm font-nunito uppercase font-black">
              React Pizza
            </h1>
            <p className="text-[10px] hidden md:block md:text-sm text-gray-400 leading-3 ">вкусней не куда</p>
          </div>
        </div>
        <SearchGroup />
        <div className=" inline-flex">
          <button onClick={setEfects} className="text-orenge block lg:hidden dark-text">
            <Menu size={35} />
          </button>
        </div>
        <div className="hidden lg:block space-x-4">
          <Switch />
          <Button className="font-nunito gap-1">
            <User size={20} />
            Войти
          </Button>
          <Button>
            <ShoppingCart size={20} />
          </Button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
