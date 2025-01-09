import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import { Catigoties } from "../components/UI/Categories";
import Sidebar from "../components/UI/Sidebar";
import { useState } from "react";
import Container from "../components/shared/Container";
import PizzaOpenModal from "../pages/home/PizzaOpenModal";
import { useFunction } from "../libs/useContext";
import Cart from "../components/UI/Cart";

const Layout = () => {
  const [efects, setEfects] = useState(false);
  const {modal} =useFunction()
  return (
    <main className="min-h-screen relative overflow-">
      {modal && (<PizzaOpenModal/>)}
      <Cart/>
      <Sidebar efects={efects} setEfects={() => setEfects(false)} />
      <Header setEfects={() => setEfects(true)} img="/img/logo.png" />
      <Container className="mt-4 py-5 px-6">
        <h1 className="font-nunito text-3xl font-bold">Все пиццы</h1>
      </Container>
      <Catigoties />
      <Outlet />
      <Toaster />
      <Footer />
    </main>
  );
};

export default Layout;
