import { Menu, ShoppingCart, User } from "lucide-react";
import Button from "../shared/Button";
import Container from "../shared/Container";
import SearchGroup from "../shared/SearchGroups";
import { Switch } from "../shared/Switch";

const Header = ({ img,setEfects }: { img: string, setEfects:()=>void }) => {
  return (
    <Container>
      <header className="flex justify-between  w-full dark-border p-5 h-1/5 border-b ">
        <div className="flex gap-2">
          <img src={img} alt="" width={45} height={35} />
          <div className="">
            <h1 className="md:text-2xl text-base font-nunito uppercase font-black">
              React Pizza
            </h1>
            <p className="text-sm text-gray-400 leading-3 ">вкусней не куда</p>
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
